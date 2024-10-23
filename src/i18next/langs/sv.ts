import { LanguageResource } from "../LanguageResource";

export const sv: LanguageResource = {
	settings: {
		warning: {
			title: "Varning",
			description:
				"Du kan använda fälten nedan för att ändra gränsen för det maximala antalet förslag som kommer att visas.",
			additionalDescription:
				"Om det lämnas tomt eller anges till 0 kommer gränsen att tas bort. Detta rekommenderas inte eftersom det kan orsaka oönskade prestandaproblem. I större valv kan du uppleva appkrascher.",
		},
		popoverLimit: {
			name: "Begränsning för popover",
			description: "Gränsen för förslag i popover.",
		},
		modalLimit: {
			name: "Begränsning för modala fönster",
			description: "Gränsen för förslag i modala fönster.",
		},
		testingPlayground: {
			title: "Testområde",
			description: "Testa de modifierade gränserna här.",
			suggestDescription:
				"För att undvika systemkrascher kommer förslagen här endast att visa maximalt 10 000 förslag.",
		},
		popoverSuggestFixed: {
			name: "Fasta förslag i popover",
			description: "Visar alltid ett fast antal förslag.",
		},
		modalSuggestFixed: {
			name: "Fasta förslag i modala fönster",
			description: "Visar alltid ett fast antal förslag.",
			buttonText: "Öppna",
		},
	},
};
