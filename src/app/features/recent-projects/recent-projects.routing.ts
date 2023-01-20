import { Route } from '@angular/router';
import { RecentProjectsDetailComponent } from './recent-projects-detail/recent-projects-detail.component';
import { RecentProjectsListComponent } from './recent-projects-list/recent-projects-list.component';

export const recentProjectsRoutes: Route[] = [
  {
    path: '',
    component: RecentProjectsListComponent,
  },
  {
    path: 'project/:id',
    component: RecentProjectsDetailComponent,
  },
];
