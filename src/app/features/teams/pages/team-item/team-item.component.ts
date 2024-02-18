import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemWrapperComponent } from 'src/app/wrappers/item-wrapper/item-wrapper.component';
import { TeamsService } from '../../teams.service';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Team, User } from 'src/app/core/models/core-types';
import { UsersService } from 'src/app/features/users/users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-team-item',
  standalone: true,
  imports: [
    CommonModule,
    ItemWrapperComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
  ],
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss'],
})
export class TeamItemComponent {
  teamService = inject(TeamsService);
  userService = inject(UsersService);

  users$: Observable<User[]>;

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null, [Validators.required]),
    description: new FormControl<string | null>(null),
    teamMembers: new FormControl<User[] | null>(null, [Validators.required]),
  });

  constructor() {
    this.users$ = this.userService.getUsers();
  }

  handleFetchItem(team: Team) {
    console.log('TIM>>>>', team);
  }

  // Sluzi za poredjenje pojedinacnih objekata u form controleru i select komponenti iz html-a
  compareWith(o1: User, o2: User): boolean {
    return o1?.id === o2?.id;
  }
}
