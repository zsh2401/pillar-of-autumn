export function info(tag: string, message: string) {
    write(format("info", tag, message))
}
export function warn(tag: string, message: string, error?: Error) {
    write(format("warn", tag, message, error))
}
export function fatal(tag: string, message: string, error?: Error) {
    write(format("fatal", tag, message, error))
}
function write(str: string) {
    console.log(str);
}
function format(level: string, tag: string, message: string, error?: Error): string {
    const date = new Date();
    return `[${date.toLocaleDateString()}-${tag}/${level}]:${message}${formatError(error)}`
}
function formatError(error?: Error): string {
    if (error === undefined || error === null) {
        return ""
    } else {
        return ` ${error.name}: ${error.message}\n${error.stack}`
    }
}