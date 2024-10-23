import { getNumbersArr } from "@/libs/utils";
import LimitBreaker from "@/main";
import { AbstractInputSuggest } from "obsidian";

export class InputSuggest extends AbstractInputSuggest<number> {
	constructor(
		private plugin: LimitBreaker,
		textInputEl: HTMLInputElement | HTMLDivElement
	) {
		super(plugin.app, textInputEl);
	}

	protected getSuggestions(query: string): number[] | Promise<number[]> {
		return getNumbersArr(this.plugin.settings.popoverLimit);
	}

	renderSuggestion(value: number, el: HTMLElement): void {
		const contentEl = el.createDiv({ cls: "suggestion-content" });
		contentEl.createDiv({
			cls: "suggestion-title",
			text: "Item number: " + (value + 1),
		});
		contentEl.createDiv({ cls: "suggestion-note", text: "index: " + value });
	}
}
