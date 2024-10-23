import { LanguageResource } from "../LanguageResource";

export const ar: LanguageResource = {
	settings: {
		warning: {
			title: "تحذير",
			description:
				"يمكنك استخدام الحقول أدناه لتعديل الحد الأقصى لعدد الاقتراحات التي سيتم عرضها.",
			additionalDescription:
				"إذا تركت فارغًا أو 0، فسيتم إزالة الحد. لا يُنصح بذلك لأنه قد يؤدي إلى تأثيرات غير مرغوبة على الأداء. في الخزائن الأكبر، قد تواجه تعطلًا في التطبيق.",
		},
		popoverLimit: {
			name: "حد النوافذ المنبثقة",
			description: "الحد الأقصى للاقتراحات في النوافذ المنبثقة.",
		},
		modalLimit: {
			name: "حد النافذة المنبثقة",
			description: "الحد الأقصى للاقتراحات في النوافذ.",
		},
		testingPlayground: {
			title: "منطقة الاختبار",
			description: "اختبر الحدود المعدلة هنا.",
			suggestDescription:
				"لتجنب تعطل النظام، ستعرض الاقتراحات هنا بحد أقصى 10,000 اقتراح.",
		},
		popoverSuggestFixed: {
			name: "اقتراحات النوافذ المنبثقة (ثابتة)",
			description: "سيتم دائمًا عرض عدد ثابت من الاقتراحات.",
		},
		modalSuggestFixed: {
			name: "اقتراحات النافذة المنبثقة (ثابتة)",
			description: "سيتم دائمًا عرض عدد ثابت من الاقتراحات.",
			buttonText: "افتح",
		},
	},
};
