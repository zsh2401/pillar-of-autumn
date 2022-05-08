import App from "./App"
import { createElement } from "react";
import { createRoot } from "react-dom/client"
import banner from "@pillar-of-autumn/app/assets/banner.txt"
import printBanner from "./util/printBanner";
const ROOT_SELECTOR = "#root"
export default function () {
    const root = createRoot(document.querySelector(ROOT_SELECTOR)!)
    const app = createElement(App)
    root.render(app)
    printBanner()
}