import { LanguageResource } from "../LanguageResource";

export const ja: LanguageResource = {
	settings: {
		warning: {
			title: "警告",
			description:
				"以下の入力を使用して、表示される最大提案数の制限を変更できます。",
			additionalDescription:
				"空白または0のままにすると、制限が解除されます。これにより、パフォーマンスに悪影響を及ぼす可能性があるため、推奨されません。大きな保管庫では、アプリがクラッシュする可能性があります。",
		},
		popoverLimit: {
			name: "ポップオーバー制限",
			description: "ポップオーバー内の提案の制限。",
		},
		modalLimit: {
			name: "モーダル制限",
			description: "モーダル内の提案の制限。",
		},
		testingPlayground: {
			title: "テストプレイグラウンド",
			description: "ここで変更された制限をテストします。",
			suggestDescription:
				"システムがクラッシュしないように、ここでの提案は最大10,000件に制限されています。",
		},
		popoverSuggestFixed: {
			name: "固定されたポップオーバーの提案",
			description: "常に一定の数の提案を表示します。",
		},
		modalSuggestFixed: {
			name: "固定されたモーダルの提案",
			description: "常に一定の数の提案を表示します。",
			buttonText: "開く",
		},
	},
};
