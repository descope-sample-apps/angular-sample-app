import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService
      .validateSession()
      .then((user) => {
        this.user = user;
      })
      .catch(() => {
        this.user = null;
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
