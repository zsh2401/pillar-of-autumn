import DevicePtr from "./DevicePtr";
import DeviceState from "./DeviceState";
import { WebUSBService } from "./drivers";
import IAdbService from "./IAdbService";
import IAdbShell from "./IAdbShell";
import ICommandListener from "./ICommandListener";

/**
 * The united Adb Service implementation
 * which can wrapper more than one adb service
 * and intelligently determine to use 
 * certain service.
 */
export default class UnitedAdbService implements IAdbService {
    readonly services: IAdbService[];

    constructor() {
        this.services = [
            new WebUSBService(navigator.usb)
        ]
    }
    async useInteractiveShell(device: string): Promise<IAdbShell> {
        return (await this.ownerOf(device)).useInteractiveShell(device);
    }

    async initialize(): Promise<void> {
        const promises = this.services.map(service => service.initialize());
        await Promise.all(promises)
    }
    async getDevices(): Promise<string[]> {
        const devicesPromise = this.services.map(service => service.getDevices())
        const devices = await Promise.all(devicesPromise);
        return devices.flat();
    }

    async statusOf(device: string): Promise<DeviceState> {
        const ownerService = await this.ownerOf(device)
        return await ownerService.statusOf(device);
    }

    openShell(device: string): Promise<IAdbShell> {
        throw new Error("Method not implemented.");
    }
    transferFile(device: string, src: string, dest: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    reboot(device: string, targetState: DeviceState): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async destory(): Promise<void> {
        const promises = this.services.map(service => service.destory());
        await Promise.all(promises)
    }

    private async ownerOf(device: DevicePtr): Promise<IAdbService> {

    }

}