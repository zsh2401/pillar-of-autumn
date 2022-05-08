import { DependencyList, useEffect } from "react";

export interface EventHandler<E> {
    (sender: any, args: E): void;
}
export interface EventTrigger<E> {
    (sender: any, args: E): void;
}
export type EventArgs = unknown;

export default function <E>(
    eventName: string,
    handler?: EventHandler<E>,
    deps?: DependencyList):
    EventTrigger<E> {

    const record = recordOf<E>(eventName);

    useEffect(() => {
        if (handler) {
            record[1].add(handler)
            return () => {
                record[1].delete(handler)
            }
        } else {
            return () => { };
        }

    }, [eventName, record, handler, ...(deps ?? [])])

    return record[0]
}

const events = new Map<string, [EventTrigger<any>, Set<EventHandler<any>>]>()
function createRecord<E>(): [EventTrigger<E>, Set<EventHandler<E>>] {
    const set = new Set<EventHandler<E>>();
    const trigger = (sender: any, args: E) => {
        set.forEach(h => h(sender, args))
    }
    return [trigger, set]
}
function recordOf<E>(eventName: string): [EventTrigger<E>, Set<EventHandler<E>>] {
    let result = events.get(eventName);
    if (result === undefined) {
        result = createRecord()
        events.set(eventName, result)
    }
    return result;
}