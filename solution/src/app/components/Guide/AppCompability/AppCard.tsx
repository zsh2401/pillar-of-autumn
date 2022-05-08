import useTranslator from "@pillar-of-autumn/app/hooks/useTranslator";

export default interface AppCardProps {
    icon: string;
    appName: string;
    appVersion: string;
    url: string;
}
export default function (props: AppCardProps) {
    const t = useTranslator();

    return <div style={{
        textAlign: "center"
    }}>
        
        <img style={{
            height: "60px",
            width: "60px"
        }} alt={props.appName} src={props.icon}></img>
        <h3>{props.appName}</h3>
        <p>{t("lowest_version")}{props.appVersion}</p>
        <a target="_blank" href={props.url}>{t("download")}</a>

    </div>
}