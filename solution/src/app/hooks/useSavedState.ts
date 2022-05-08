import lf from "localforage"
import { Dispatch, useCallback, useEffect, useState } from "react"
import useAppEvent from "./useAppEvent";

export default function <S>(key: string, defaultState: S): [S, Dispatch<S>] {

    const [state, setState] = useState(defaultState);

    const trigger = useAppEvent(`update-saved-state-${key}`, (s, e: S) => {
        setState(e)
    })

    const wrappedSetState = useCallback((s: S) => {
        trigger(null, s)
        lf.setItem(pKeyOf(key), s)
    }, [trigger])

    useEffect(() => {
        (async () => {
            let value = await lf.getItem<S>(pKeyOf(key))

            if (value === null) {
                value = await defaultState;
                lf.setItem<S>(pKeyOf(key), defaultState)
            } else {
                setState(value)
            }
        })()
    }, [key, defaultState, wrappedSetState])

    return [state, wrappedSetState]
}
function pKeyOf(key: string) {
    return `state-${key}`
}