// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DescopeAuthModule, DescopeAuthService, descopeInterceptor } from '@descope/angular-sdk';
import { environment } from 'src/environments/environment';
import { zip } from 'rxjs';
import {
	HttpClientModule,
	provideHttpClient,
	withInterceptors
} from '@angular/common/http';

export function initializeApp(authService: DescopeAuthService) {
	return () => zip([authService.refreshSession(), authService.refreshUser()]);
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HomeComponent,
  ],
  imports: [BrowserModule,
            AppRoutingModule,
            HttpClientModule,
            GoogleChartsModule,
            DescopeAuthModule.forRoot({
              projectId: environment.descopeProjectId
            })
          ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [DescopeAuthService],
      multi: true
    },
    provideHttpClient(withInterceptors([descopeInterceptor]))
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
