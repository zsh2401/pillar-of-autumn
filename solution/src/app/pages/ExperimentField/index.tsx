import DevicePtr from "@pillar-of-autumn/core/DevicePtr"
import WebUSBDriver from "@pillar-of-autumn/core/drivers/webusb/WebUSBDriver"
import WebUSBService from "@pillar-of-autumn/core/drivers/webusb/WebADBService"
import IAdbService from "@pillar-of-autumn/core/IAdbService"
import { useCallback, useEffect, useMemo, useState } from "react"
export default function () {
    const driver = useMemo(() => new WebUSBDriver(), [])
    const [service, setService] = useState<IAdbService>()
    const [devices, setDevices] = useState<DevicePtr[]>([])
    useEffect(() => {
        (async () => {
            if (driver) {
                await driver.initialize();
                const service = await driver.getService();
                await service.initialize();
                setService(service);
            }
        })();
    }, [driver])

    const onClickPair = useCallback(() => {
        if (service) {
            (service as WebUSBService).pairNewDevice();
        }
    }, [service])

    const onClickGetDevices = useCallback(async () => {
        if (service) {
            setDevices(await (service as WebUSBService).getDevices())
        }
    }, [service])
    return <div>
        <div>
            <h2>Control Panel</h2>
            Driver Id:{driver.id}<br />
            Driver Name:{driver.name}<br />
            <button onClick={onClickPair}>Pair</button>
            <button onClick={onClickGetDevices}>Refresh devices</button>
        </div>

        <div>
            <h2>Devices</h2>
            <ul>
                {
                    devices.length === 0 ?
                        <p>No device paired.</p> :
                        devices.map(device => <li>{device}</li>)
                }
            </ul>
        </div>


    </div>
}