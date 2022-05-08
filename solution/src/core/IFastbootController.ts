export type FastbootCommand = string;
export type FastbootResponse = {
    type: "string",
    data: string
} |
{
    type: "bin",
    data: Buffer
}
export default interface IFastbootController {
    execute(command: FastbootCommand): Promise<FastbootResponse>
}