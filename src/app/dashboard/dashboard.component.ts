import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DescopeAuthService } from '@descope/angular-sdk';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  user: any;
  activityFeed: string[] = [
    'Uploaded a document',
    'Completed the project',
    'Started a new task',
    'Edited the profile',
    'Created a new project',
  ];
  constructor(
    private router: Router
  ) {}

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
			}
		});
  }

  async logout() {
    this.authService.descopeSdk.logout();
    this.router.navigate(['/']);
  }
}
