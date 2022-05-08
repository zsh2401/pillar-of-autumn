import { Modal } from "@fluentui/react"
import { useCallback, useEffect, useMemo, useState } from "react"
export interface GuideArgs {

}
export interface GuideResult {
    continuable: boolean;
}
export type GuideController = (args: GuideArgs) => Promise<GuideResult>;
export interface GuideReadyArgs {
    controller: GuideController
}
export interface GuideProps {
    onGuideReady: (args: GuideReadyArgs) => void;
}
export default function (props: GuideProps) {

    const [opened, setOpened] = useState<boolean>(false);

    const [resolve, setResolve] = useState<(value: GuideResult) => void>()
    const [reject, setReject] = useState<(err: any) => void>();
    const [promise, setPromise] = useState<Promise<GuideResult>>();

    useEffect(() => {
        setPromise(new Promise<GuideResult>((_resolve, _reject) => {
            setResolve(_resolve)
            setReject(_reject)
        }))
    }, [setResolve, setReject, setPromise])

    useEffect(() => {
        if (resolve && reject && promise) {
            props.onGuideReady({
                controller: async () => {
                    setOpened(true)
                    return await promise
                }
            })
        }
    }, [resolve, reject, promise])

    const onSuccess = useCallback(() => {
        if (resolve)
            resolve({ continuable: true })
    }, [resolve])

    const onFail = useCallback(() => {
        if (resolve)
            resolve({ continuable: true })
    }, [resolve])


    return <Modal isOpen={opened}>
        <div>
            <h1>Hi</h1>
        </div>
    </Modal>

}