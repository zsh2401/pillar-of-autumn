import "./App.css"
import Router from "./Router";
import AppContext from "./AppContext";
import { Modal } from "@fluentui/react";
import useCreateAppContext from "./hooks/useCreateAppContext";
export default function App() {

    const appContextValue = useCreateAppContext();

    return <AppContext.Provider value={appContextValue}>
        <div>

            <Router />

            <Modal isOpen={appContextValue.ui.mainModalOpened}>
                {appContextValue.ui.mainModalContent}
            </Modal>

        </div>
    </AppContext.Provider>
}
