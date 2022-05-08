import DevicePtr from "./DevicePtr";
import DeviceState from "./DeviceState"
import IAdbShell from "./IAdbShell"
import ICommandListener from "./ICommandListener"
import ICommandResult from "./ICommandResult"

export default interface IAdbService {

    getDevices(): Promise<DevicePtr[]>;

    statusOf(device: DevicePtr): Promise<DeviceState>;

    shell(device: DevicePtr, command: string, listener: ICommandListener): Promise<ICommandResult>;

    useInteractiveShell(device: DevicePtr): Promise<IAdbShell>;

    pull(device: DevicePtr, src: string, dest: string): Promise<Blob>;

    push(device: DevicePtr, src: string, dest: string): Promise<Blob>;

    reboot(device: DevicePtr, state: DeviceState): Promise<void>;

}