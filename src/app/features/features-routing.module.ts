import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamListComponent } from './teams/pages/team-list/team-list.component';
import { ProjectListComponent } from './projects/pages/project-list/project-list.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full',
  },
  {
    path: 'users',
    loadComponent: () =>
      import('./users/pages/user-list/user-list.component').then(
        (c) => c.UserListComponent
      ),
    title: 'Zaposleni',
  },
  {
    path: 'users/:id',
    loadComponent: () =>
      import('./users/pages/user-item//user-item.component').then(
        (c) => c.UserItemComponent
      ),
    title: 'Zaposlenik',
  },
  {
    path: 'teams',
    component: TeamListComponent,
    title: 'Timovi',
  },
  {
    path: 'teams/:id',
    loadComponent: () =>
      import('./teams/pages/team-item/team-item.component').then(
        (c) => c.TeamItemComponent
      ),
    title: 'Tim',
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    title: 'Timovi',
  },
  {
    path: 'projects/:id',
    loadComponent: () =>
      import('./projects/pages/project-item/project-item.component').then(
        (c) => c.ProjectItemComponent
      ),
    title: 'Projekat',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
