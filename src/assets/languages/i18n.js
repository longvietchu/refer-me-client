import i18n from "i18n-js";
import { I18nManager } from "react-native";
import AsyncStorageUtils from "../../helpers/AsyncStorageUtils";
import vi from "./locate/vi";
import en from "./locate/en";

i18n.translations = {
  vi,
  en,
};
i18n.fallbacks = true;
// const defaultLanguage = { languageTag: 'en', isRTL: false };
// const { languageTag, isRTL } = defaultLanguage;
// I18nManager.forceRTL(isRTL);
i18n.locale = "vi";

export default i18n;

export function setLocation(i18n, location) {
  I18nManager.allowRTL(false);
  _storeData(location);
  const defaultLanguage = { languageTag: location, isRTL: false };
  const { languageTag, isRTL } = defaultLanguage;
  i18n.locale = languageTag;
  return i18n;
}

const _storeData = async (location) => {
  try {
    await AsyncStorageUtils.save(AsyncStorageUtils.KEY.LANGUAGE, location);
  } catch (error) {}
};
