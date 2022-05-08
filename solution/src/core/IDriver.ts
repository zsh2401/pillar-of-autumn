import IAdbService from "./IAdbService";
import IFastbootService from "./IFastbootService";

export default interface IDriver {

    readonly id: string;
    readonly name: string;
    readonly author: string;

    isSupport(): Promise<boolean>

    initialize(): Promise<void>

    enable(): Promise<void>;

    getAdbService(): Promise<IAdbService>

    getFastbootService(): Promise<IFastbootService>

    disable(): Promise<void>

    dispose(): Promise<void>
}