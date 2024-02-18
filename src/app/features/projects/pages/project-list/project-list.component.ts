import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ListWrapperComponent } from 'src/app/wrappers/list-wrapper/list-wrapper.component';
import { ProjectService } from '../../project.service';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { EmptyListPlaceholderComponent } from 'src/app/core/components/empty-list-placeholder/empty-list-placeholder.component';

@Component({
  selector: 'app-project-list',
  standalone: true,
  imports: [
    CommonModule,
    ListWrapperComponent,
    EmptyListPlaceholderComponent,
    MatListModule,
    MatIconModule,
  ],
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss'],
})
export class ProjectListComponent {
  projectService = inject(ProjectService);

  projects$: Observable<any>;

  constructor() {
    this.projects$ = this.projectService.getItems();
  }
}
