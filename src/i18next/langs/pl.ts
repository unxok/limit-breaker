import { LanguageResource } from "../LanguageResource";

export const pl: LanguageResource = {
	settings: {
		warning: {
			title: "Ostrzeżenie",
			description:
				"Możesz użyć poniższych pól, aby zmodyfikować limit maksymalnej liczby sugerowanych pozycji, które zostaną wyświetlone.",
			additionalDescription:
				"Jeśli pozostawisz puste lub ustawisz na 0, limit zostanie usunięty. Nie zaleca się tego, ponieważ może to powodować niepożądane problemy z wydajnością. W większych skarbcach możesz doświadczyć awarii aplikacji.",
		},
		popoverLimit: {
			name: "Limit dla okienek popover",
			description: "Limit sugestii w okienkach popover.",
		},
		modalLimit: {
			name: "Limit dla okienek modalnych",
			description: "Limit sugestii w okienkach modalnych.",
		},
		testingPlayground: {
			title: "Pole testowe",
			description: "Przetestuj tutaj zmodyfikowane limity.",
			suggestDescription:
				"Aby nie przeciążyć systemu, tutaj wyświetli się maksymalnie 10 000 sugestii.",
		},
		popoverSuggestFixed: {
			name: "Stała liczba sugestii w popover",
			description: "Zawsze pokaże stałą liczbę sugestii.",
		},
		modalSuggestFixed: {
			name: "Stała liczba sugestii w modalu",
			description: "Zawsze pokaże stałą liczbę sugestii.",
			buttonText: "Otwórz",
		},
	},
};
