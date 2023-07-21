import { Injectable } from '@angular/core';
import Descope from '@descope/web-js-sdk';
import { environment } from '../environments/environment'; 

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  sdk: any;

  constructor() { 
    this.sdk = Descope({ projectId: environment.descopeProjectId, persistTokens: true, autoRefresh: true });
  }

  validateSession(): Promise<any> {
    return this.sdk.refresh().then(() => {
      const sessionToken = this.sdk.getSessionToken();
      if (sessionToken && !this.sdk.isJwtExpired(sessionToken)) {
        // User is logged in
        return "You're logged in!";
      } else {
        let err = new Error("Failed to validate session. User is not logged in.");
        err.status = 401;
        throw err;
      }
    });
  }

  async logout(): Promise<void> {
    await this.sdk.logout();
  }
}