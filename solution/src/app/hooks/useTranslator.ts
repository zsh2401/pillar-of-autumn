import { useTranslation } from "react-i18next";
import initializeLang from "../util/env/lang"

export default function () {
    return useTranslation().t;
}
//Only be call once
initializeLang();