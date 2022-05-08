import DevicePtr from "./DevicePtr";

export default interface IFastbootService {
    getDevices(): Promise<DevicePtr[]>
}