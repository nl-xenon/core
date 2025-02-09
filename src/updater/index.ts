// src/updater/index.ts
import semver from 'semver';
import axios from 'axios';

interface UpdateCheckResult {
  currentVersion: string;
  latestVersion: string;
  needsUpdate: boolean;
}

export class Updater {
  private readonly packageName: string;

  constructor(packageName: string = '@nlxenon/core') {
    this.packageName = packageName;
  }

  async checkForUpdates(currentVersion: string): Promise<UpdateCheckResult> {
    const response = await axios.get(`https://registry.npmjs.org/${this.packageName}`);
    const latestVersion = response.data['dist-tags'].latest;
    
    return {
      currentVersion,
      latestVersion,
      needsUpdate: semver.gt(latestVersion, currentVersion)
    };
  }

}