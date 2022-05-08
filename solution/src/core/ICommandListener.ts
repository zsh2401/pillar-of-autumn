export default interface ICommandListener {
    (type: "stdout" | "err", content: string): void;
}