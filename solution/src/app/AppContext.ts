import { read } from "fs";
import { createContext, ReactNode } from "react";
export enum Theme {
    Light,
    Dark
}
export interface UIStates {
    lang: string
    theme: Theme
    mainModalOpened: boolean
    mainModalContent: ReactNode
}
export interface CommonProperty {
}
export interface AppContext {
    ui: UIStates
    common: CommonProperty
}
export default createContext<AppContext>(null!);
