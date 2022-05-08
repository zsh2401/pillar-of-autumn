import { useEffect, useState } from "react"
import sleep from "@pillar-of-autumn/app/util/sleep";
import useSetting from "@pillar-of-autumn/app/hooks/useSetting";

export default function () {

    const [loading, setIsLoading] = useState<boolean>(false)
    const [isSupport, setIsSupport] = useState(false)
    // const [isFirstLaunch,] = useSetting<boolean>("isFirstLaunch");
    useEffect(() => {
        setIsLoading(true);
        (async () => {
            await sleep(1000)
            // setIsSupport((await checkEnvironment()).fullSupport)
        })();
        setIsLoading(false)
    }, [setIsLoading, setIsSupport])

    return <div>
        <p>Welcome to Pillar of Autumn (The Web Version of AutumnBox)</p>
        <div>
            Your browser is perfectly support the WebUSB API.
            <a>Learn more</a>
            Your browser {
                isSupport ?
                    <span>Support</span> :
                    <span>DOES NOT Support</span>
            } this software
            <button>Let's go!</button>
        </div>
    </div>
}