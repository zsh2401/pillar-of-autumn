import { BrowserRouter, Routes, Route } from "react-router-dom"
import MainPage from "./pages/MainPage";
import GuidancePage from "./pages/GuidancePage";
import ExperimentField from "./pages/ExperimentField"
import Startup from "./pages/Startup";
export default function Router() {
    return <BrowserRouter>
        <Routes>
            <Route path="/" element={<Startup />} />
            <Route path="/main" element={<MainPage />} />
            <Route path="/guidance" element={<GuidancePage />} />
            <Route path="/exp" element={<ExperimentField />} />
        </Routes>
    </BrowserRouter>
}