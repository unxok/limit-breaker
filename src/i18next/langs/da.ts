import { LanguageResource } from "../LanguageResource";

export const da: LanguageResource = {
	settings: {
		warning: {
			title: "Advarsel",
			description:
				"Du kan bruge felterne nedenfor til at ændre grænsen for det maksimale antal forslag, der vil blive vist.",
			additionalDescription:
				"Hvis det efterlades tomt eller som 0, fjernes grænsen. Dette anbefales ikke, da det kan have uønskede påvirkninger på ydeevnen. I større lagre kan du opleve appnedbrud.",
		},
		popoverLimit: {
			name: "Grænse for popover",
			description: "Grænsen for forslag i popovers.",
		},
		modalLimit: {
			name: "Modalgrænse",
			description: "Grænsen for forslag i modaler.",
		},
		testingPlayground: {
			title: "Testområde",
			description: "Test de ændrede grænser her.",
			suggestDescription:
				"For at undgå at nedlægge systemet vil foreslående her kun vise maksimalt 10.000 forslag.",
		},
		popoverSuggestFixed: {
			name: "Popover forslag (fast)",
			description: "Vil altid vise et fast antal forslag.",
		},
		modalSuggestFixed: {
			name: "Modal forslag (fast)",
			description: "Vil altid vise et fast antal forslag.",
			buttonText: "Åben",
		},
	},
};
