import english from "./en.json";
import spanish from "./es.json";
export type PROP_LANG = typeof english | typeof spanish;
export const LANGS = {
  ENGLISH: "en",
  SPANISH: "es",
};
export const getI18n = ({
  currentLocale = LANGS.SPANISH,
}: {
  currentLocale: string | undefined;
}): PROP_LANG => {
  if (currentLocale == LANGS.SPANISH) return spanish;
  if (currentLocale == LANGS.ENGLISH) return english;
  return spanish;
};
