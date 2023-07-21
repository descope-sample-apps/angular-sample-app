import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements AfterViewInit {
  constructor(
    private elRef: ElementRef,
    private renderer: Renderer2,
    private router: Router,
    private authService: AuthService
  ) {}

  ngAfterViewInit(): void {
    const wcElement = this.elRef.nativeElement.querySelector('descope-wc');

    const onSuccess = (e: CustomEvent) => {
      this.router.navigate(['/dashboard']);
    };
    const onError = (err: ErrorEvent) => console.log(err);

    this.renderer.listen(wcElement, 'success', onSuccess);
    this.renderer.listen(wcElement, 'error', onError);
  }
}
