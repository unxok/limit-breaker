import { LanguageResource } from "../LanguageResource";

export const es: LanguageResource = {
	settings: {
		warning: {
			title: "Advertencia",
			description:
				"Puedes usar los campos a continuación para modificar el límite del número máximo de sugerencias que se mostrarán.",
			additionalDescription:
				"Si se deja en blanco o como 0, el límite se eliminará. Esto no es aconsejable, ya que puede causar impactos no deseados en el rendimiento. En bóvedas más grandes, puedes experimentar fallos en la aplicación.",
		},
		popoverLimit: {
			name: "Límite de sugerencias emergentes",
			description: "El límite de sugerencias en las ventanas emergentes.",
		},
		modalLimit: {
			name: "Límite del modal",
			description: "El límite de sugerencias en los modales.",
		},
		testingPlayground: {
			title: "Área de pruebas",
			description: "Prueba los límites modificados aquí.",
			suggestDescription:
				"Para evitar que el sistema se bloquee, los sugerentes aquí solo mostrarán un máximo de 10,000 sugerencias.",
		},
		popoverSuggestFixed: {
			name: "Sugerencias emergentes (fijo)",
			description: "Siempre mostrará una cantidad fija de sugerencias.",
		},
		modalSuggestFixed: {
			name: "Sugerencias del modal (fijo)",
			description: "Siempre mostrará una cantidad fija de sugerencias.",
			buttonText: "Abrir",
		},
	},
};
