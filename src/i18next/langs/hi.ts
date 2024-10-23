import { LanguageResource } from "../LanguageResource";

export const hi: LanguageResource = {
	settings: {
		warning: {
			title: "चेतावनी",
			description:
				"आप नीचे दिए गए इनपुट का उपयोग करके अधिकतम सुझावों की संख्या की सीमा को संशोधित कर सकते हैं।",
			additionalDescription:
				"यदि इसे खाली छोड़ दिया जाता है या 0 पर सेट किया जाता है, तो सीमा हटा दी जाएगी। इसे अनुशंसित नहीं किया जाता है क्योंकि इससे प्रदर्शन पर अवांछित प्रभाव पड़ सकते हैं। बड़े वाल्ट में, आपको ऐप क्रैश का सामना करना पड़ सकता है।",
		},
		popoverLimit: {
			name: "पॉपओवर सीमा",
			description: "पॉपओवर में सुझावों की सीमा।",
		},
		modalLimit: {
			name: "मोडल सीमा",
			description: "मोडल में सुझावों की सीमा।",
		},
		testingPlayground: {
			title: "परीक्षण क्षेत्र",
			description: "यहां संशोधित सीमाओं का परीक्षण करें।",
			suggestDescription:
				"अपने सिस्टम को क्रैश से बचाने के लिए, यहां के सुझावों की अधिकतम संख्या 10,000 होगी।",
		},
		popoverSuggestFixed: {
			name: "पॉपओवर सुझाव (निश्चित)",
			description: "हमेशा निश्चित संख्या में सुझाव दिखाएगा।",
		},
		modalSuggestFixed: {
			name: "मोडल सुझाव (निश्चित)",
			description: "हमेशा निश्चित संख्या में सुझाव दिखाएगा।",
			buttonText: "खोलें",
		},
	},
};
