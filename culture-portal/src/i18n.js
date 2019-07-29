import i18n from "i18next";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationBy from "./locales/by/translation.json";

i18n
    .use(XHR)
    .init({
        debug: true,
        lng: "ru",
        fallbackLng: "ru", // use en if detected lng is not available

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false // react already safes from xss
        },

        resources: {
            en: {
                translations: translationEn
            },
            ru: {
                translations: translationRu
            },
            by: {
                translations: translationBy
            },
        },
        // have a common namespace used around the full app
        ns: ["translations"],
        defaultNS: "translations"
    });

export default i18n;