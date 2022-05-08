export interface GuideProps {
    onClickOver: () => void;
}
export default function (props: GuideProps) {
    return <button onClick={props.onClickOver}>Over</button>
}