import { ReactNode, useMemo } from "react";
import { AppContext, CommonProperty, Theme, UIStates } from "../AppContext";
import useRefState from "./useNoticableRef";
import { useTranslation } from "react-i18next"

/**
 * This function should be only call by the App.tsx
 */
export default function (): AppContext {

    const ui = createUIStates();
    const common = createCommonProperty();

    return useMemo(() => {
        return { ui, common }
    }, [])

}
function createUIStates(): UIStates {

    const mainModalOpenedRef = useRefState<boolean>(false)
    const mainModalContentRef = useRefState<ReactNode>("")
    const themeRef = useRefState<Theme>(Theme.Light)
    const { i18n } = useTranslation();

    return useMemo(() => {
        return {
            get lang() { return i18n.language },
            set lang(value: string) { i18n.changeLanguage(value) },
            get mainModalContent() { return mainModalContentRef.current },
            set mainModalContent(value: ReactNode) { mainModalContentRef.current = value },
            get theme() { return themeRef.current },
            set theme(value: Theme) { themeRef.current = value },
            get mainModalOpened() { return mainModalOpenedRef.current },
            set mainModalOpened(value: boolean) { mainModalOpenedRef.current = value }
        }
    }, [mainModalOpenedRef, mainModalContentRef, themeRef])
}

function createCommonProperty(): CommonProperty {
    return useMemo(() => {
        return {}
    }, [])
}