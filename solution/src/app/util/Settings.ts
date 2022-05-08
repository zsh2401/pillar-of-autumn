export default class Settings {
    static readonly instance = new Settings();
    async get isFirstLaunch():Promise<boolean> {
        return true;
    }
}