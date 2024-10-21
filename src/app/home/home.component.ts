import { Component, inject } from '@angular/core';
import { DescopeAuthService } from '@descope/angular-sdk';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  user: any;

  private authService = inject(DescopeAuthService);

  ngOnInit(): void {
    this.authService.user$.subscribe((descopeUser) => {
			if (descopeUser.user) {
				this.user = {
          name: descopeUser.user.name ?? '',
          email: descopeUser.user.email || 'test@descope.com',
          role: descopeUser.user.roleNames || 'No Role Set',
          picture: descopeUser.user.picture || '',
        };
			} else {
        // If the user is logged out, clear the user details
        this.user = null;
        // Optionally, trigger One Tap or another login flow here
      }
		});
  }
}
