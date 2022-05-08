import IAdbService from "@pillar-of-autumn/core/IAdbService";
import IFastbootService from "@pillar-of-autumn/core/IFastbootService";
import IDriver from "../../IDriver";
import FastbootService from "./FastbootService";
// import "@types/w3c-web-usb"
import WebUSBService from "./WebADBService";

export default class WebUSBDriver implements IDriver {
    async enable(): Promise<void> {

    }

    async getFastbootService(): Promise<IFastbootService> {
        throw new Error("Not supported yet.")
    }

    async disable(): Promise<void> {

    }

    readonly author: string = "zsh2401"
    readonly id: string = "web-usb-adb-driver";
    readonly name: string = "Seymour's Maple "

    adbService: WebUSBService | null = null;
    fastbootService: FastbootService | null = null;

    async isSupport(): Promise<boolean> {
        return navigator.usb !== undefined;
    }

    async initialize(): Promise<void> {
        this.adbService = new WebUSBService(navigator.usb);
    }

    async getAdbService(): Promise<IAdbService> {
        if (this.adbService === null) {
            throw new Error("Should initialize driver first.")
        }
        return this.adbService;
    }

    async dispose(): Promise<void> {

    }

}