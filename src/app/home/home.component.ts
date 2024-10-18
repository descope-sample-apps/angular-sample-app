import { Component, inject, OnInit } from '@angular/core';
import { DescopeAuthService } from '@descope/angular-sdk';
import { OneTapService } from '../one-tap.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private oneTapService: OneTapService,
    private router: Router) {}
  user: any;

  private authService = inject(DescopeAuthService);

  ngOnInit(): void {
    const validToken = this.oneTapService.checkSessionToken();
    if (!validToken) {
      this.oneTapService.displayOneTap();
    } else {
      // Redirect to dashboard if token is valid
      this.router.navigate(['/dashboard']);
    }
    const sessionToken = this.authService.getSessionToken();
    console.log(sessionToken)

    this.authService.user$.subscribe((descopeUser) => {
			if (descopeUser.user) {
				this.user = {
          name: descopeUser.user.name ?? '',
          email: descopeUser.user.email || 'test@descope.com',
          role: descopeUser.user.roleNames || 'No Role Set',
          picture: descopeUser.user.picture || '',
        };
			}
		});
  }
}
