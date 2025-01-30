import { bootstrapApplication } from '@angular/platform-browser';

import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { ReactListComponent } from './react-list/react-list.component';
import { FlutterListComponent } from './flutter-list/flutter-list.component';
import { AngularListComponent } from './angular-list/angular-list.component';

export const appConfig = {
  providers: [
    provideHttpClient(),
    provideRouter([
      { path: '', redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'home', component: HomeComponent },
      { path: 'react-list', component: ReactListComponent },
      {path: 'flutter-list', component: FlutterListComponent},
      {path: 'angular-list', component: AngularListComponent}
    ])
  ]
};

bootstrapApplication(AppComponent, appConfig);
