import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListWrapperComponent } from 'src/app/wrappers/list-wrapper/list-wrapper.component';
import { TeamsService } from '../../teams.service';
import { Observable } from 'rxjs';
import { Team } from 'src/app/core/models/core-types';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-team-list',
  standalone: true,
  imports: [CommonModule, ListWrapperComponent, MatListModule, MatIconModule],
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent {
  teamService = inject(TeamsService);

  teams$: Observable<Team[]>;

  constructor() {
    this.teams$ = this.teamService.getItems();
  }
}
