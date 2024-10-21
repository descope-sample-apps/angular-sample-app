import { Injectable } from '@angular/core';
import Descope from '@descope/web-js-sdk';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OneTapService {
  private sdk: any;
  private oneTapInitialized: boolean = false;

  constructor() {
    const projectId = environment.descopeProjectId;
    this.sdk = Descope({ projectId: projectId, persistTokens: true, autoRefresh: true });
  }

  // Method to display Google One Tap
  async displayOneTap(): Promise<void> {
    if (this.oneTapInitialized) return;

    try {
      const resp = await this.sdk.fedcm.oneTap('google');
      console.log("One Tap response:", resp);
      // Redirect on success
      window.location.replace("/dashboard");
      this.oneTapInitialized = true;
    } catch (error) {
      console.error("Failed to display One Tap:", error);
    }
  }

  // Method to check if the user is authenticated
  isAuthenticated(): boolean {
    const sessionToken = this.sdk.getSessionToken();
    if (sessionToken) {
      return !this.sdk.isJwtExpired(sessionToken);
    }
    return false;
  }

  // Method to check if One Tap has been initialized
  isOneTapInitialized(): boolean {
    return this.oneTapInitialized;
  }
}
