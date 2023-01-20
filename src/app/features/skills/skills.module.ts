import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillsComponent } from './skills.component';
import { RouterModule } from '@angular/router';
import { skillsRoutes } from './skills.routing';

@NgModule({
  declarations: [SkillsComponent],
  imports: [CommonModule, RouterModule.forChild(skillsRoutes)],
})
export class SkillsModule {}
