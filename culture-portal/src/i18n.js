import i18n from "i18next";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationBy from "./locales/by/translation.json";
import ananichBy from "./locales/by/ananich_by.json";
import ananichRu from "./locales/ru/ananich_ru.json";
import ananichEn from "./locales/en/ananich_en.json";

i18n
    .use(XHR)
    .init({
        debug: true,
        lng: "ru",

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },

        resources: {
            en: {
                translations: translationEn,
                ananich: ananichEn,
            },
            ru: {
                translations: translationRu,
                ananich: ananichRu,
            },
            by: {
                translations: translationBy,
                ananich: ananichBy,
            },
        },
        // have a common namespace used around the full app
        ns: ["translations", "ananich"],
        defaultNS: "translations"
    });

export default i18n;