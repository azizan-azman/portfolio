import { Route } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from './home.component';

export const homeRoutes: Route[] = [
  Shell.childRoutes([
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
  ]),
];
