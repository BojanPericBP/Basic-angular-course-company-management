import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemWrapperComponent } from 'src/app/wrappers/item-wrapper/item-wrapper.component';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ProjectService } from '../../project.service';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { Team } from 'src/app/core/models/core-types';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { TeamsService } from 'src/app/features/teams/teams.service';

@Component({
  selector: 'app-project-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    ItemWrapperComponent,
    MatSelectModule,
  ],
  templateUrl: './project-item.component.html',
  styleUrls: ['./project-item.component.scss'],
})
export class ProjectItemComponent {
  projectService = inject(ProjectService);
  teamService = inject(TeamsService);

  teams$: Observable<Team[]>;

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null, [Validators.required]),
    description: new FormControl<string | null>(null),
    teams: new FormControl<Team[] | null>(null, [Validators.required]),
  });

  constructor() {
    this.teams$ = this.teamService.getItems();
  }

  compareTeams = (o1: Team, o2: Team) => o1?.id === o2?.id;
}
