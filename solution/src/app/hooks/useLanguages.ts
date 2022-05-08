import { loadedLanguages } from "../util/env/lang"
export default function (): Map<string, string> {
    return loadedLanguages;
}