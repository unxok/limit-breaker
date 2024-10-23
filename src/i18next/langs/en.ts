import { LanguageResource } from "../LanguageResource";

export const en: LanguageResource = {
	settings: {
		warning: {
			title: "Warning",
			description:
				"You may use the inputs below to modify the limit for the maximum number of suggestions that will be rendered.",
			additionalDescription:
				"If left blank or as 0, the limit will be removed. This is not advised as it may cause unwanted performance impacts. On larger vaults, you may experience app crashes.",
		},
		popoverLimit: {
			name: "Popover limit",
			description: "The limit of suggestions in popovers.",
		},
		modalLimit: {
			name: "Modal limit",
			description: "The limit of suggestions in modals.",
		},
		testingPlayground: {
			title: "Testing playground",
			description: "Test the modified limits here.",
			suggestDescription:
				"So as to not crash your system, the suggesters here will only render 10,000 max suggestions.",
		},
		popoverSuggestFixed: {
			name: "Popover suggest (fixed)",
			description: "Will always show a fixed amount of suggestions.",
		},
		modalSuggestFixed: {
			name: "Modal suggest (fixed)",
			description: "Will always show a fixed amount of suggestions.",
			buttonText: "Open",
		},
	},
};
