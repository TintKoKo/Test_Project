import * as Localisation from "expo-localization";
import i18n from "i18n-js";

//config
import translationsJson from "../configs/translations.json";

const localize = (locale: string) => {
  console.log("ARG", locale);
  console.log("Localization", Localisation.locale);

  i18n.translations = translationsJson;

  i18n.locale = locale || Localisation.locale;

  i18n.fallbacks = true;

  return i18n.locale;
};

export { localize, i18n };
