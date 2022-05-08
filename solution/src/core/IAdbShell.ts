export type OutputListener = (content: string) => void;
export default interface IAdbShell {

    addEventListener(e: "output", listener: OutputListener): void;
    removeEvetListener(e: "output", listener: OutputListener): void;

    open(): Promise<void>;
    write(str: string): Promise<void>;
    close(): Promise<void>;
}