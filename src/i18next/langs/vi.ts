import { LanguageResource } from "../LanguageResource";

export const vi: LanguageResource = {
	settings: {
		warning: {
			title: "Cảnh báo",
			description:
				"Bạn có thể sử dụng các trường dưới đây để sửa đổi giới hạn cho số lượng đề xuất tối đa sẽ được hiển thị.",
			additionalDescription:
				"Nếu để trống hoặc là 0, giới hạn sẽ bị loại bỏ. Điều này không được khuyến nghị vì nó có thể gây ra những tác động không mong muốn đến hiệu suất. Trong các kho lưu trữ lớn hơn, bạn có thể gặp sự cố ứng dụng.",
		},
		popoverLimit: {
			name: "Giới hạn của popover",
			description: "Giới hạn số lượng đề xuất trong popover.",
		},
		modalLimit: {
			name: "Giới hạn của modal",
			description: "Giới hạn số lượng đề xuất trong modal.",
		},
		testingPlayground: {
			title: "Khu vực thử nghiệm",
			description: "Kiểm tra giới hạn đã sửa đổi tại đây.",
			suggestDescription:
				"Để tránh làm hỏng hệ thống của bạn, người đề xuất tại đây sẽ chỉ hiển thị tối đa 10.000 đề xuất.",
		},
		popoverSuggestFixed: {
			name: "Đề xuất trong popover (cố định)",
			description: "Luôn hiển thị một số lượng cố định các đề xuất.",
		},
		modalSuggestFixed: {
			name: "Đề xuất trong modal (cố định)",
			description: "Luôn hiển thị một số lượng cố định các đề xuất.",
			buttonText: "Mở",
		},
	},
};
