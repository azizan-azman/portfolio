import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecentProjectsDetailComponent } from './recent-projects-detail/recent-projects-detail.component';
import { RecentProjectsListComponent } from './recent-projects-list/recent-projects-list.component';
import { DialogComponent } from './dialog/dialog.component';
import { RouterModule } from '@angular/router';
import { recentProjectsRoutes } from './recent-projects.routing';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [RecentProjectsDetailComponent, RecentProjectsListComponent, DialogComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(recentProjectsRoutes),
    MatIconModule,
    NgbModule,
    MatButtonModule,
    MatDialogModule,
  ],
})
export class RecentProjectsModule {}
