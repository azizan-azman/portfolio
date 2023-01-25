import { Route } from '@angular/router';
import { Shell } from '@app/shell/shell.service';
import { HomeComponent } from './home.component';

export const homeRoutes: Route[] = [{ path: '', component: HomeComponent }];
