import i18n from "i18next";
import XHR from "i18next-xhr-backend";

import translationEn from "./locales/en/translation.json";
import translationRu from "./locales/ru/translation.json";
import translationBy from "./locales/by/translation.json";
import ananichBy from "./locales/by/ananich_by.json";
import ananichRu from "./locales/ru/ananich_ru.json";
import ananichEn from "./locales/en/ananich_en.json";
import levinBy from "./locales/by/levin_by.json";
import levinRu from "./locales/ru/levin_ru.json";
import levinEn from "./locales/en/levin_en.json";
import dzuzeppeBy from "./locales/by/dzuzeppe_by.json";
import dzuzeppeRu from "./locales/ru/dzuzeppe_ru.json";
import dzuzeppeEn from "./locales/en/dzuzeppe_en.json";
import karakoBy from "./locales/by/karako_by.json";
import karakoRu from "./locales/ru/karako_ru.json";
import karakoEn from "./locales/en/karako_en.json";
import langbardBy from "./locales/by/langbard_by.json";
import langbardRu from "./locales/ru/langbard_ru.json";
import langbardEn from "./locales/en/langbard_en.json";
import paoloBy from "./locales/by/paolo_by.json";
import paoloRu from "./locales/ru/paolo_ru.json";
import paoloEn from "./locales/en/paolo_en.json";

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
                levin: levinEn,
                dzuzeppe: dzuzeppeEn,
                karako: karakoEn,
                langbard: langbardEn,
                paolo: paoloEn,
            },
            ru: {
                translations: translationRu,
                ananich: ananichRu,
                levin: levinRu,
                dzuzeppe: dzuzeppeRu,
                karako: karakoRu,
                langbard: langbardRu,
                paolo: paoloRu,
            },
            by: {
                translations: translationBy,
                ananich: ananichBy,
                levin: levinBy,
                dzuzeppe: dzuzeppeBy,
                karako: karakoBy,
                langbard: langbardBy,
                paolo: paoloBy,
            },
        },
        // have a common namespace used around the full app
        ns: ["translations", "ananich", "levin", "dzuzeppe", "karako", "langbard", "paolo"],
        defaultNS: "translations"
    });

export default i18n;