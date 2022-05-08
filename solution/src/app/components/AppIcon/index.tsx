import appIcon from "@pillar-of-autumn/app/assets/icon.png"
export default function (props: { size?: number }) {
    return <div style={{ background: "white", borderWidth: "1px", borderStyle: "solid", boxShadow:"0px 15px 10px -15px #000", borderColor: "whitesmoke", borderRadius: "25px" }}>
        <img style={{
            height: `${props.size ?? 120}px`,
            width: `${props.size ?? 120}px`
        }} src={appIcon} alt="Pillar of Autumn Icon" />
    </div>

}