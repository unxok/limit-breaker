import { LanguageResource } from "./LanguageResource";

export const nl: LanguageResource = {
	settings: {
		warning: {
			title: "Waarschuwing",
			description:
				"Je kunt de onderstaande velden gebruiken om de limiet voor het maximale aantal suggesties dat wordt weergegeven aan te passen.",
			additionalDescription:
				"Als het leeg blijft of op 0 staat, wordt de limiet verwijderd. Dit wordt niet aanbevolen, omdat dit ongewenste prestatieproblemen kan veroorzaken. In grotere opslagruimtes kun je crashes van de app ervaren.",
		},
		popoverLimit: {
			name: "Limiet voor popovers",
			description: "De limiet van suggesties in popovers.",
		},
		modalLimit: {
			name: "Limiet voor modals",
			description: "De limiet van suggesties in modals.",
		},
		testingPlayground: {
			title: "Testgebied",
			description: "Test hier de gewijzigde limieten.",
			suggestDescription:
				"Om te voorkomen dat het systeem crasht, worden hier maximaal 10.000 suggesties weergegeven.",
		},
		popoverSuggestFixed: {
			name: "Popover-suggesties (vast)",
			description: "Toont altijd een vast aantal suggesties.",
		},
		modalSuggestFixed: {
			name: "Modal-suggesties (vast)",
			description: "Toont altijd een vast aantal suggesties.",
			buttonText: "Open",
		},
	},
};
