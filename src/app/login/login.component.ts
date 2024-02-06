import { Component, ElementRef, Renderer2, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  descopeProjectId!: string;
  descopeBaseURL!: string;

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.descopeProjectId = environment.descopeProjectId;
    this.descopeBaseURL = environment.baseURL;
    //this.initDescopeWc();
  }

  onSuccess(e: CustomEvent) {
		console.log('SUCCESSFULLY LOGGED IN', e.detail);
    this.router.navigate(['/dashboard']);

	}

	onError(e: CustomEvent) {
		console.log('ERROR FROM LOG IN FLOW', e.detail);
	}
}
