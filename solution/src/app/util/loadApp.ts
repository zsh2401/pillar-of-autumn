export type Stage = "first_launch" | "checking_compability" | "initializing_drivers";
export interface ApplicationLoadingArgs {
    stageChanged: (newStage: Stage) => void
    openGuide: () => Promise<boolean>
    success: () => void;
    failed: () => void;
}
export default async function
    (args: ApplicationLoadingArgs): Promise<void> {
    await args.openGuide()
}