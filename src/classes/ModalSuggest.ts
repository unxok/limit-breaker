import { getNumbersArr } from "@/libs/utils";
import LimitBreaker from "@/main";
import { FuzzySuggestModal } from "obsidian";

export class ModalSuggest extends FuzzySuggestModal<number> {
	constructor(private plugin: LimitBreaker) {
		super(plugin.app);
	}

	getItems(): number[] {
		return getNumbersArr(this.plugin.settings.modalLimit);
	}

	getItemText(item: number): string {
		return item.toString();
	}

	onChooseItem(item: number, evt: MouseEvent | KeyboardEvent): void {
		this.close();
	}
}
