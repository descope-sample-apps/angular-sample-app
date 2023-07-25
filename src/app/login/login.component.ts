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

  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.descopeProjectId = environment.descopeProjectId;
    this.initDescopeWc();
  }

  private initDescopeWc(): void {
    const wcElement = this.renderer.createElement('descope-wc');

    // this.renderer.setAttribute(wcElement, 'project-id', this.descopeProjectId);
    // this.renderer.setAttribute(wcElement, 'flow-id', 'sign-up-or-in');
    // this.renderer.setAttribute(wcElement, 'theme', 'light');

    const parentElement = this.elRef.nativeElement;
    this.renderer.appendChild(parentElement, wcElement);

    const onSuccess = (e: CustomEvent) => {
      this.router.navigate(['/dashboard']);
    };
    const onError = (err: ErrorEvent) => console.log(err);

    this.renderer.listen(wcElement, 'success', onSuccess);
    this.renderer.listen(wcElement, 'error', onError);
  }
}
