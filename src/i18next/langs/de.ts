import { LanguageResource } from "../LanguageResource";

export const de: LanguageResource = {
	settings: {
		warning: {
			title: "Warnung",
			description:
				"Du kannst die Felder unten verwenden, um das Limit für die maximale Anzahl an Vorschlägen anzupassen, die angezeigt werden.",
			additionalDescription:
				"Wenn es leer bleibt oder auf 0 gesetzt ist, wird das Limit entfernt. Dies wird nicht empfohlen, da es unerwünschte Leistungsprobleme verursachen kann. In größeren Tresoren kannst du App-Abstürze erleben.",
		},
		popoverLimit: {
			name: "Vorschlags-Limit für Popovers",
			description: "Das Limit für Vorschläge in Popovers.",
		},
		modalLimit: {
			name: "Modal-Limit",
			description: "Das Limit für Vorschläge in Modals.",
		},
		testingPlayground: {
			title: "Testbereich",
			description: "Teste hier die geänderten Limits.",
			suggestDescription:
				"Um dein System nicht zum Absturz zu bringen, zeigen die Vorschläge hier maximal 10.000 Vorschläge an.",
		},
		popoverSuggestFixed: {
			name: "Popover-Vorschläge (fest)",
			description: "Zeigt immer eine feste Anzahl an Vorschlägen.",
		},
		modalSuggestFixed: {
			name: "Modal-Vorschläge (fest)",
			description: "Zeigt immer eine feste Anzahl an Vorschlägen.",
			buttonText: "Öffnen",
		},
	},
};
