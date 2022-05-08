// import "@types/w3c-web-usb"
import DevicePtr from "../../DevicePtr";
export default function (src: USBDevice): DevicePtr {
    return src.serialNumber!;
}