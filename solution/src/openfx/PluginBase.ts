import PluginManifest from "./PluginManifest";

export default abstract class PluginBase {
    abstract getManifest(): Promise<PluginManifest>;
    abstract initialize(): Promise<void>;
    abstract dispose(): Promise<void>;
}