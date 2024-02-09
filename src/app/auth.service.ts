import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { DescopeAuthModule, DescopeAuthService } from '@descope/angular-sdk';

declare var Descope: any;

export interface User {
  name: string;
  email: string;
  role: string;
  picture: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  sdk: any;

  constructor() {
    this.sdk = new DescopeAuthService({
      projectId: environment.descopeProjectId,
    })
  }

  async getUserData(): Promise<User> {
    try {
      const sessionToken = this.sdk.getSessionToken();
      console.log(sessionToken)
      if (sessionToken && !this.sdk.isJwtExpired(sessionToken)) {
        const profile = await this.sdk.me(this.sdk.getRefreshToken());
        const user: User = {
          name: profile.data.name || 'No Name Set',
          email: profile.userEmail || 'test@descope.com',
          role: profile.data.role || 'No Role Set',
          picture: profile.data.picture || '',
        };
        return user;
      } else if (!sessionToken || this.sdk.isJwtExpired(sessionToken)) {
        try {
          await this.sdk.refresh(this.sdk.getRefreshToken());
          const profile = await this.sdk.me(this.sdk.getRefreshToken());
          const user: User = {
            name: profile.data.name || 'No Name Set',
            email: profile.userEmail || 'test@descope.com',
            role: profile.data.role || 'No Role Set',
            picture: profile.data.picture || '',
          };

          return user;
        } catch (error) {
          throw new Error('Failed to validate session. User is not logged in.');
        }
      } else {
        throw new Error('Failed to validate session. User is not logged in.');
      }
    } catch (err) {
      throw err;
    }
  }

  async validateSession(): Promise<any> {
    return this.sdk.refresh().then(() => {
      const sessionToken = this.sdk.getSessionToken();
      if (sessionToken && !this.sdk.isJwtExpired(sessionToken)) {
        return "You're logged in!";
      } else {
        let err = new Error(
          'Failed to validate session. User is not logged in.'
        );
        throw err;
      }
    });
  }

  async logout(): Promise<void> {
    await this.sdk.logout(this.sdk.getRefreshToken());
  }
}
