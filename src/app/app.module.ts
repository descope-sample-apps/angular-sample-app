// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ParameterHashLocationStrategy } from './ParamHashLocStrat';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { GoogleChartsModule } from 'angular-google-charts';
import { DescopeAuthModule, DescopeAuthService, descopeInterceptor } from '@descope/angular-sdk';
import { environment } from 'src/environments/environment';
import { zip } from 'rxjs';
import { withInterceptors, provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';

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
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], imports: [BrowserModule,
        AppRoutingModule,
        GoogleChartsModule,
        DescopeAuthModule.forRoot({
            projectId: environment.descopeProjectId
        })], providers: [
            {
                provide: APP_INITIALIZER,
                useFactory: initializeApp,
                deps: [DescopeAuthService],
                multi: true
            },
            {
                provide: LocationStrategy,
                useClass: ParameterHashLocationStrategy
            },
            provideHttpClient(withInterceptors([descopeInterceptor])),
            provideHttpClient(withInterceptorsFromDi())
        ]
})
export class AppModule { }
