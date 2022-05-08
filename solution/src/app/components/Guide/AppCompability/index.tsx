import googleChromeIcon from "./google_chrome.png"
import AppCard from "./AppCard"
import useTranslator from "@pillar-of-autumn/app/hooks/useTranslator"
export default function () {
    const t = useTranslator()
    return <div>
        <h2>{t("recommonded_env")}</h2>
        <AppCard icon={googleChromeIcon}
            appName={t("google_chrome_name")}
            appVersion="65"
            url={t("google_chrome_url")}
        />
    </div>
}