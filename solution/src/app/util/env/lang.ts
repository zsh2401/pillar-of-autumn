import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";
export const loadedLanguages: Map<string, string> = new Map()
export default async function (): Promise<void> {
    i18n.use(initReactI18next)
        .init({
            resources: await loadResources(),
            lng: "zh-CN",
            fallbackLng: "zh-CN"
        })
}
export function switchLanguage(langCode: string) {
    i18n.changeLanguage(langCode)
}
async function loadResources(): Promise<Resource> {
    const langs =
        import.meta.globEager("@pillar-of-autumn/app/assets/lang/*.json")
    const result: any = {}
    for (const langFile in langs) {
        const langName = langs[langFile]["lang_name"]
        const langCode = langs[langFile]["lang_code"]
        loadedLanguages.set(langCode, langName)
        result[langCode] = {
            translation: langs[langFile]
        }
    }
    return result;
}