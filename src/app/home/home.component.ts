import { Component } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  user: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.authService.validateSession()
      .then(user => {
        this.user = user;
      })
      .catch(() => {
        this.user = null;
      });
  }
}
