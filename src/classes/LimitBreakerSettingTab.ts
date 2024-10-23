import { clampNumber } from "@/libs/utils";
import LimitBreaker from "@/main";
import { debounce, PluginSettingTab, Setting } from "obsidian";
import { InputSuggest } from "./InputSuggest";
import { ModalSuggest } from "./ModalSuggest";
import { text } from "@/i18next";

export type LimitBreakerSettings = {
	modalLimit: number;
	popoverLimit: number;
};

export const defaultSettings: LimitBreakerSettings = {
	modalLimit: 100,
	popoverLimit: 100,
};

export class LimitBreakerSettingTab extends PluginSettingTab {
	constructor(public plugin: LimitBreaker) {
		super(plugin.app, plugin);
	}

	display(): void {
		const { containerEl, plugin } = this;
		containerEl.empty();

		const debouncer = debounce(
			async (key: string, value: number) => {
				// debounce seems to be typed incorrectly
				const k = key as keyof LimitBreakerSettingTab;
				await plugin.updateSettings((prev) => ({ ...prev, [k]: value }));
				plugin.reapplyPatches();
			},
			500,
			true
		);

		const update = <T extends keyof LimitBreakerSettings>(
			key: T,
			value: LimitBreakerSettings[T]
		) => {
			debouncer(key, value);
		};

		new Setting(containerEl).setName(text("settings.warning.title")).setDesc(
			createFragment((el) => {
				el.createSpan({
					text: text("settings.warning.description"),
				});
				el.createEl("br");
				el.createEl("br");
				el.createSpan({
					text: text("settings.warning.additionalDescription"),
				});
			})
		);

		new Setting(containerEl)
			.setName(text("settings.popoverLimit.name"))
			.setDesc(text("settings.popoverLimit.description"))
			.addText((cmp) =>
				cmp
					.setValue(plugin.settings.popoverLimit.toString())
					.onChange((v) =>
						update(
							"popoverLimit",
							clampNumber(Number(v), 0, Number.MAX_SAFE_INTEGER)
						)
					)
			);

		new Setting(containerEl)
			.setName(text("settings.modalLimit.name"))
			.setDesc(text("settings.modalLimit.description"))
			.addText((cmp) =>
				cmp
					.setValue(plugin.settings.modalLimit.toString())
					.onChange((v) =>
						update(
							"modalLimit",
							clampNumber(Number(v), 0, Number.MAX_SAFE_INTEGER)
						)
					)
			);

		new Setting(containerEl)
			.setHeading()
			.setName(text("settings.testingPlayground.title"))
			.setDesc(
				createFragment((el) => {
					el.createSpan({
						text: text("settings.testingPlayground.description"),
					});
					el.createEl("br");
					el.createSpan({
						text: text("settings.testingPlayground.suggestDescription"),
					});
				})
			);

		new Setting(containerEl)
			.setName(text("settings.popoverSuggestFixed.name"))
			.setDesc(text("settings.popoverSuggestFixed.description"))
			.addText((cmp) => {
				new InputSuggest(plugin, cmp.inputEl);
			});

		new Setting(containerEl)
			.setName(text("settings.modalSuggestFixed.name"))
			.setDesc(text("settings.modalSuggestFixed.description"))
			.addButton((cmp) => {
				cmp
					.setButtonText(text("settings.modalSuggestFixed.buttonText"))
					.onClick(() => {
						new ModalSuggest(plugin).open();
					});
			});
	}
}
