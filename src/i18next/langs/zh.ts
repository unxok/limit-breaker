import { LanguageResource } from "../LanguageResource";

export const zh: LanguageResource = {
	settings: {
		warning: {
			title: "警告",
			description: "您可以使用下面的输入框修改最大建议数量的限制。",
			additionalDescription:
				"如果留空或设为0，将删除该限制。这不建议使用，因为可能会对性能产生不良影响。在较大的库中，您可能会遇到应用崩溃的情况。",
		},
		popoverLimit: {
			name: "弹出窗口建议限制",
			description: "弹出窗口中建议的限制。",
		},
		modalLimit: {
			name: "模态窗口限制",
			description: "模态窗口中建议的限制。",
		},
		testingPlayground: {
			title: "测试区",
			description: "在这里测试修改后的限制。",
			suggestDescription: "为了避免系统崩溃，这里的建议最多显示10,000个。",
		},
		popoverSuggestFixed: {
			name: "弹出窗口建议 (固定)",
			description: "将始终显示固定数量的建议。",
		},
		modalSuggestFixed: {
			name: "模态窗口建议 (固定)",
			description: "将始终显示固定数量的建议。",
			buttonText: "打开",
		},
	},
};
