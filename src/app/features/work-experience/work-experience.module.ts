import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WorkExperienceComponent } from './work-experience.component';
import { RouterModule } from '@angular/router';
import { workExperienceRoutes } from './work-experience.routing';

@NgModule({
  declarations: [WorkExperienceComponent],
  imports: [CommonModule, RouterModule.forChild(workExperienceRoutes)],
})
export class WorkExperienceModule {}
