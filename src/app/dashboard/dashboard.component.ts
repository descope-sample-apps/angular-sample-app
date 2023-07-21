import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

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

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .getUserData()
      .then((user) => {
        this.user = user;
      })
      .catch(() => {
        this.user = null;
        // this.router.navigate(['/login']);  // Redirect to login page if session is invalid.
      });
  }
}
