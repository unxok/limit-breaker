import { LanguageResource } from "../LanguageResource";

export const fa: LanguageResource = {
	settings: {
		warning: {
			title: "هشدار",
			description:
				"می‌توانید از فیلدهای زیر برای تغییر حد تعداد پیشنهادهای قابل نمایش استفاده کنید.",
			additionalDescription:
				"اگر خالی رها شود یا 0 تنظیم شود، محدودیت حذف خواهد شد. این توصیه نمی‌شود زیرا ممکن است باعث مشکلات عملکردی ناخواسته شود. در خزانه‌های بزرگتر ممکن است با خرابی برنامه مواجه شوید.",
		},
		popoverLimit: {
			name: "محدودیت پاپ‌آپ‌ها",
			description: "محدودیت تعداد پیشنهادات در پاپ‌آپ‌ها.",
		},
		modalLimit: {
			name: "محدودیت مودال‌ها",
			description: "محدودیت تعداد پیشنهادات در مودال‌ها.",
		},
		testingPlayground: {
			title: "محیط آزمایش",
			description: "اینجا محدودیت‌های اصلاح‌شده را آزمایش کنید.",
			suggestDescription:
				"برای جلوگیری از خرابی سیستم، پیشنهادها اینجا حداکثر تا ۱۰,۰۰۰ مورد نمایش داده می‌شوند.",
		},
		popoverSuggestFixed: {
			name: "پیشنهادات پاپ‌آپ (ثابت)",
			description: "همیشه تعداد ثابتی از پیشنهادها را نمایش می‌دهد.",
		},
		modalSuggestFixed: {
			name: "پیشنهادات مودال (ثابت)",
			description: "همیشه تعداد ثابتی از پیشنهادها را نمایش می‌دهد.",
			buttonText: "باز کردن",
		},
	},
};
