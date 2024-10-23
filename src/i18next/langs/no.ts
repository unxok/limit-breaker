import { LanguageResource } from "../LanguageResource";

export const no: LanguageResource = {
	settings: {
		warning: {
			title: "Advarsel",
			description:
				"Du kan bruke feltene nedenfor for å endre grensen for maksimalt antall forslag som vil bli vist.",
			additionalDescription:
				"Hvis det blir stående tomt eller som 0, vil grensen bli fjernet. Dette anbefales ikke, da det kan føre til uønskede ytelsesproblemer. I større hvelv kan du oppleve at appen krasjer.",
		},
		popoverLimit: {
			name: "Grense for popover",
			description: "Grensen for forslag i popovers.",
		},
		modalLimit: {
			name: "Modalgrense",
			description: "Grensen for forslag i modaler.",
		},
		testingPlayground: {
			title: "Testområde",
			description: "Test de modifiserte grensene her.",
			suggestDescription:
				"For å unngå å krasje systemet, vil forslagene her bare vise maks 10.000 forslag.",
		},
		popoverSuggestFixed: {
			name: "Popover forslag (fast)",
			description: "Vil alltid vise et fast antall forslag.",
		},
		modalSuggestFixed: {
			name: "Modal forslag (fast)",
			description: "Vil alltid vise et fast antall forslag.",
			buttonText: "Åpne",
		},
	},
};
