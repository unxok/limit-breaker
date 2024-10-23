import { LanguageResource } from "../LanguageResource";

export const fr: LanguageResource = {
	settings: {
		warning: {
			title: "Avertissement",
			description:
				"Vous pouvez utiliser les champs ci-dessous pour modifier la limite du nombre maximum de suggestions qui seront affichées.",
			additionalDescription:
				"Si vous laissez vide ou à 0, la limite sera supprimée. Ce n'est pas conseillé car cela peut entraîner des problèmes de performances indésirables. Dans des coffres-forts plus grands, vous pourriez rencontrer des plantages de l'application.",
		},
		popoverLimit: {
			name: "Limite de suggestions dans les popovers",
			description: "La limite des suggestions dans les popovers.",
		},
		modalLimit: {
			name: "Limite du modal",
			description: "La limite des suggestions dans les modals.",
		},
		testingPlayground: {
			title: "Zone de test",
			description: "Testez les limites modifiées ici.",
			suggestDescription:
				"Afin de ne pas faire planter votre système, les suggesters ici afficheront un maximum de 10 000 suggestions.",
		},
		popoverSuggestFixed: {
			name: "Suggestions en popover (fixe)",
			description: "Affichera toujours un nombre fixe de suggestions.",
		},
		modalSuggestFixed: {
			name: "Suggestions modales (fixe)",
			description: "Affichera toujours un nombre fixe de suggestions.",
			buttonText: "Ouvrir",
		},
	},
};
