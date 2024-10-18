import { Injectable } from '@angular/core';
import Descope from '@descope/web-js-sdk';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class OneTapService {
  private sdk: any;
  private oneTapInitialized = false;

  constructor(
    private router: Router
  ) {
    const projectId = 'P2nAVoCcNZnZmbFXxc4j0VgmeQFh';
    this.sdk = Descope({ projectId: projectId, persistTokens: true, autoRefresh: true });
  }

  async displayOneTap() {
    if (this.oneTapInitialized) return;

    try {
      const resp = await this.sdk.fedcm.oneTap('google');
      console.log("One Tap response:", resp);
      // Redirect on success
      this.router.navigate(['/dashboard']);
      this.oneTapInitialized = true;
    } catch (error) {
      console.error("Failed to display One Tap:", error);
    }
  }

  checkSessionToken() {
    const sessionToken = this.sdk.getSessionToken();
    if (sessionToken) {
      return !this.sdk.isJwtExpired(sessionToken);
    }
    return false;
  }
}