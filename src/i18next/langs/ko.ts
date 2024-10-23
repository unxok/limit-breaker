import { LanguageResource } from "../LanguageResource";

export const ko: LanguageResource = {
	settings: {
		warning: {
			title: "경고",
			description:
				"아래 입력란을 사용하여 표시될 최대 제안 수의 제한을 수정할 수 있습니다.",
			additionalDescription:
				"비워두거나 0으로 설정하면 제한이 제거됩니다. 이는 성능에 부정적인 영향을 줄 수 있으므로 권장되지 않습니다. 더 큰 볼트에서 앱 충돌이 발생할 수 있습니다.",
		},
		popoverLimit: {
			name: "팝오버 제한",
			description: "팝오버에서 제안의 제한입니다.",
		},
		modalLimit: {
			name: "모달 제한",
			description: "모달에서 제안의 제한입니다.",
		},
		testingPlayground: {
			title: "테스트 영역",
			description: "여기서 수정된 제한을 테스트하세요.",
			suggestDescription:
				"시스템 충돌을 방지하기 위해 여기의 제안자는 최대 10,000개의 제안을 렌더링합니다.",
		},
		popoverSuggestFixed: {
			name: "고정된 팝오버 제안",
			description: "항상 고정된 수의 제안을 표시합니다.",
		},
		modalSuggestFixed: {
			name: "고정된 모달 제안",
			description: "항상 고정된 수의 제안을 표시합니다.",
			buttonText: "열기",
		},
	},
};
