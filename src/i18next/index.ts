import { ar } from "./langs/ar";
import { da } from "./langs/da";
import { de } from "./langs/de";
import { en } from "./langs/en";
import { es } from "./langs/es";
import { fa } from "./langs/fa";
import { fr } from "./langs/fr";
import { hi } from "./langs/hi";
import { it } from "./langs/it";
import { ja } from "./langs/ja";
import { ko } from "./langs/ko";
import { nl } from "./langs/nl";
import { no } from "./langs/no";
import { pl } from "./langs/pl";
import { ru } from "./langs/ru";
import { sv } from "./langs/sv";
import { uk } from "./langs/uk";
import { vi } from "./langs/vi";
import { zh } from "./langs/zh";

const namespace = "limit-breaker";

i18next.addResourceBundle("en", namespace, en);
i18next.addResourceBundle("es", namespace, es);
i18next.addResourceBundle("de", namespace, de);
i18next.addResourceBundle("fr", namespace, fr);
i18next.addResourceBundle("ru", namespace, ru);
i18next.addResourceBundle("zh", namespace, zh);
i18next.addResourceBundle("ko", namespace, ko);
i18next.addResourceBundle("ja", namespace, ja);
i18next.addResourceBundle("ar", namespace, ar);
i18next.addResourceBundle("nl", namespace, nl);
i18next.addResourceBundle("it", namespace, it);
i18next.addResourceBundle("pl", namespace, pl);
i18next.addResourceBundle("hi", namespace, hi);
i18next.addResourceBundle("vi", namespace, vi);
i18next.addResourceBundle("uk", namespace, uk);
i18next.addResourceBundle("sv", namespace, sv);
i18next.addResourceBundle("fa", namespace, fa);
i18next.addResourceBundle("da", namespace, da);
i18next.addResourceBundle("no", namespace, no);

export const text = i18next.getFixedT(null, namespace);
