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
    path: 'teams',
    component: TeamListComponent,
    title: 'Timovi',
  },
  {
    path: 'projects',
    component: ProjectListComponent,
    title: 'Timovi',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
