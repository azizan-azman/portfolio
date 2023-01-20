import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationComponent } from './education.component';
import { RouterModule } from '@angular/router';
import { educationRoutes } from './education.routing';

@NgModule({
  declarations: [EducationComponent],
  imports: [CommonModule, RouterModule.forChild(educationRoutes)],
})
export class EducationModule {}
