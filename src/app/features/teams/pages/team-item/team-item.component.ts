import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemWrapperComponent } from 'src/app/wrappers/item-wrapper/item-wrapper.component';
import { TeamsService } from '../../teams.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-team-item',
  standalone: true,
  imports: [
    CommonModule,
    ItemWrapperComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './team-item.component.html',
  styleUrls: ['./team-item.component.scss'],
})
export class TeamItemComponent {
  teamService = inject(TeamsService);
  form = new FormGroup({
    id: new FormControl<string | null>(null),
    name: new FormControl<string | null>(null),
    description: new FormControl<string | null>(null),
  });
}
