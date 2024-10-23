import { AbstractInputSuggest, Plugin, SuggestModal } from "obsidian";
import { around, dedupe } from "monkey-around";
import {
	LimitBreakerSettings,
	defaultSettings,
	LimitBreakerSettingTab,
} from "./classes/LimitBreakerSettingTab";
import { parseIsNaN } from "./libs/utils";

export default class LimitBreaker extends Plugin {
	settings: LimitBreakerSettings = { ...defaultSettings };
	uninstallers: ReturnType<typeof around>[] = [];
	async onload(): Promise<void> {
		await this.loadSettings();
		this.uninstallers = doPatches(this);
		this.addSettingTab(new LimitBreakerSettingTab(this));
	}

	onunload(): void {
		this.uninstallers.forEach((fn) => fn());
	}

	async loadSettings(): Promise<LimitBreakerSettings> {
		const data = await this.loadData();
		const parsed = parseSettings(data);
		this.settings = parsed;
		return { ...parsed };
	}

	async saveSettings(settings: LimitBreakerSettings): Promise<void> {
		this.settings = { ...settings };
		await this.saveData(settings);
	}

	async updateSettings(
		cb: (prev: LimitBreakerSettings) => LimitBreakerSettings
	): Promise<void> {
		const newSettings = cb(this.settings);
		await this.saveSettings(newSettings);
	}

	reapplyPatches(): void {
		this.uninstallers.forEach((fn) => fn());
		this.uninstallers = doPatches(this);
	}
}

// Since these settings are so simple, this will do
const parseSettings = (data: unknown) => {
	const t = typeof data;
	const modalLimit = "modalLimit";
	const popoverLimit = "popoverLimit";
	if (
		typeof data !== "object" ||
		Array.isArray(data) ||
		!data ||
		!data.hasOwnProperty(modalLimit) ||
		!data.hasOwnProperty(popoverLimit)
	)
		return { ...defaultSettings };
	const { modalLimit: m, popoverLimit: p } = data as {
		modalLimit: unknown;
		popoverLimit: unknown;
	};
	if (parseIsNaN(m) || parseIsNaN(p)) return { ...defaultSettings };
	return data as LimitBreakerSettings;
};

const doPatches = (plugin: LimitBreaker) => {
	const key = "limit-breaker-plugin";
	const unpatchAbstractInputSuggest = around(AbstractInputSuggest.prototype, {
		// @ts-ignore TODO PR obsidian-typings
		showSuggestions(old) {
			return dedupe(key, old, function (e: unknown[]) {
				// @ts-ignore Doesn't look like there's a way to get this typed correctly
				const that = this as AbstractInputSuggest<unknown>;
				that.limit = plugin.settings.popoverLimit;

				return old.call(that, e);
			});
		},
	});

	const unpatchSuggestModal = around(SuggestModal.prototype, {
		onOpen(old) {
			return dedupe(key, old, function () {
				// @ts-ignore
				const that = this as AbstractInputSuggest<unknown>;
				that.limit = plugin.settings.modalLimit;
				return old.call(that);
			});
		},
	});

	plugin.register(unpatchAbstractInputSuggest);
	plugin.register(unpatchSuggestModal);
	return [unpatchAbstractInputSuggest, unpatchSuggestModal];
};
