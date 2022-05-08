import { useMemo, useRef } from "react";
import useForceRerender from "./useForceRerender";

export interface NoticableRef<T> {
    current: T
}
export default function <T>(initialState: T): NoticableRef<T> {

    const rerender = useForceRerender();

    const theRef = useRef<T>(initialState);

    return useMemo(() => {
        return {
            set current(value: T) {
                theRef.current = value
                rerender()
            },
            get current() {
                return theRef.current
            }
        }
    }, [theRef, rerender])
}