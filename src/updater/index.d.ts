interface UpdateCheckResult {
    currentVersion: string;
    latestVersion: string;
    needsUpdate: boolean;
}
export declare class Updater {
    private readonly packageName;
    constructor(packageName?: string);
    checkForUpdates(currentVersion: string): Promise<UpdateCheckResult>;
}
export {};
//# sourceMappingURL=index.d.ts.map