import ICommandResult from "@pillar-of-autumn/core/ICommandResult";
import DevicePtr from "../../DevicePtr";
import DeviceState from "../../DeviceState";
import IAdbService from "../../IAdbService";
import IAdbShell from "../../IAdbShell";
import ICommandListener from "../../ICommandListener";
import convert from "./convert";
import claimADBInterface, { Disclaimer } from "./util/claimADBInterface";
// const APPLE_INC = 0x05ac;
// const ADB_DEVICE = 0x0483;

export default class WebUSBService implements IAdbService {

    private readonly webusb: USB;
    private readonly claimedDevices: Map<DevicePtr, Disclaimer>;

    constructor(webusb: USB) {
        this.webusb = webusb;
        this.claimedDevices = new Map();
    }

    shell(device: string, command: string, listener: ICommandListener): Promise<ICommandResult> {
        throw new Error("Method not implemented.");
    }
    useInteractiveShell(device: string): Promise<IAdbShell> {
        throw new Error("Method not implemented.");
    }
    pull(device: string, src: string, dest: string): Promise<Blob> {
        throw new Error("Method not implemented.");
    }
    push(device: string, src: string, dest: string): Promise<Blob> {
        throw new Error("Method not implemented.");
    }
    reboot(device: string, targetState: DeviceState): Promise<void> {
        throw new Error("Method not implemented.");
    }

    statusOf(device: string): Promise<DeviceState> {
        throw new Error("Method not implemented.");
    }
    executeCommand(device: string, command: string, listener: ICommandListener): Promise<string> {
        throw new Error("Method not implemented.");
    }

    async getDevices(): Promise<DevicePtr[]> {
        const devices = await navigator.usb.getDevices()
        return devices.map(convert)
    }

    executeInstanceCommand(sn: string, command: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    openShell(sn: string): Promise<IAdbShell> {
        throw new Error("Method not implemented.");
    }

    transferFile(sn: string, src: string, dest: string): Promise<string> {
        throw new Error("Method not implemented.");
    }

    async claim(device: DevicePtr): Promise<void> {
        const ud = await this.usbDeviceOf(device);
        const disclaimer = await claimADBInterface(ud)
        this.claimedDevices.set(device, disclaimer)
    }
    
    async disclaim(device: DevicePtr) {
        const disclaimer = this.claimedDevices.get(device);
        if (disclaimer) {
            this.claimedDevices.delete(device);
            await disclaimer();
        }
    }

    private async usbDeviceOf(devicePtr: DevicePtr): Promise<USBDevice> {
        const devices = await this.webusb.getDevices();
        const targetDevice = devices.find(dev => dev.serialNumber === devicePtr);
        if (targetDevice === undefined) {
            throw new Error("Device not found!")
        }
        return targetDevice;
    }

    async pairNewDevice(): Promise<DevicePtr> {

        const device = await this.webusb.requestDevice({
            filters: [
                {
                    classCode: 0xFF,
                    subclassCode: 0x42,
                    protocolCode: 1,
                }
            ]
        })

        return convert(device)
    }

    async forgetDevice(device: DevicePtr): Promise<void> {
        await this.disclaim(device);
        const deivce = await this.usbDeviceOf(device);
        await deivce.forget();
    }
}