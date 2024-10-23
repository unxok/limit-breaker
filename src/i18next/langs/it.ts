import { LanguageResource } from "../LanguageResource";

export const it: LanguageResource = {
	settings: {
		warning: {
			title: "Avviso",
			description:
				"Puoi usare i campi sottostanti per modificare il limite massimo del numero di suggerimenti che verranno visualizzati.",
			additionalDescription:
				"Se lasciato vuoto o impostato su 0, il limite verrà rimosso. Non è consigliato, poiché potrebbe causare impatti negativi sulle prestazioni. Nei vault più grandi, potresti riscontrare crash dell'app.",
		},
		popoverLimit: {
			name: "Limite di popover",
			description: "Il limite di suggerimenti nei popover.",
		},
		modalLimit: {
			name: "Limite di modale",
			description: "Il limite di suggerimenti nei modali.",
		},
		testingPlayground: {
			title: "Area di test",
			description: "Testa i limiti modificati qui.",
			suggestDescription:
				"Per evitare il crash del sistema, i suggeritori qui mostreranno un massimo di 10.000 suggerimenti.",
		},
		popoverSuggestFixed: {
			name: "Suggerimenti popover (fisso)",
			description: "Mostrerà sempre un numero fisso di suggerimenti.",
		},
		modalSuggestFixed: {
			name: "Suggerimenti modale (fisso)",
			description: "Mostrerà sempre un numero fisso di suggerimenti.",
			buttonText: "Apri",
		},
	},
};
