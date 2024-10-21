import { Component, OnInit } from '@angular/core';
import { OneTapService } from './one-tap.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private oneTapService: OneTapService, private router: Router) {}

  async ngOnInit(): Promise<void> {
    // Check if the user is authenticated
    const isAuthenticated = this.oneTapService.isAuthenticated();

    if (!isAuthenticated) {
      // If the user is not authenticated and One Tap is not initialized, show One Tap
      if (!this.oneTapService.isOneTapInitialized()) {
        await this.oneTapService.displayOneTap();
      }
    } else {
      // If user is authenticated, only redirect to dashboard if not already there
      if (this.router.url !== '/dashboard') {
        this.router.navigate(['/dashboard']);  // Use Angular router for navigation
      }
    }
  }
}
