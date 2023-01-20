import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: 'skills', loadChildren: () => import('./features/skills/skills.module').then((m) => m.SkillsModule) },
    {
      path: 'education',
      loadChildren: () => import('./features/education/education.module').then((m) => m.EducationModule),
    },
    {
      path: 'work-experience',
      loadChildren: () =>
        import('./features/work-experience/work-experience.module').then((m) => m.WorkExperienceModule),
    },
    {
      path: 'recent-projects',
      loadChildren: () =>
        import('./features/recent-projects/recent-projects.module').then((m) => m.RecentProjectsModule),
    },
  ]),
  // Fallback when no prior route is matched
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
  providers: [],
})
export class AppRoutingModule {}
