import { useEffect } from "react";
import { switchLanguage } from "../util/env/lang";
import { useTranslation } from "react-i18next"
export default function (langCode: string, restore: boolean = true) {
    const { i18n } = useTranslation();
    useEffect(() => {
        const oldLang = i18n.language;
        switchLanguage(langCode)
        return () => {
            if (restore) {
                switchLanguage(oldLang)
            }
        }
    }, [langCode])
}