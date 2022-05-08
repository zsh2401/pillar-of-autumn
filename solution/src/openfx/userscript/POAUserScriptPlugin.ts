import MainArgs from "../MainArgs";
import PluginBase from "../PluginBase";
import POAUserScriptMainArgs from "./POAUserScriptMainArgs";
import POAUserScriptMainFunction from "./POAUserScriptMainFunction"
export default class ThirdPlugin extends PluginBase {

    private readonly script: string;
    private readonly header: Map<string, string>;

    constructor(script: string) {
        super();
        this.script = script;
        this.header = ThirdPlugin.parseHeader(script);
    }

    private static parseHeader(script: string): Map<string, string> {

    }

    async runMain(args: MainArgs): Promise<void> {
        const mainFunction: POAUserScriptMainFunction = eval(this.script);
        const poausArgs = await this.prepareArgs(args);
        await mainFunction(poausArgs);
    }

    async prepareArgs(pluginMainArgs: MainArgs): Promise<POAUserScriptMainArgs> {
        
    }

}