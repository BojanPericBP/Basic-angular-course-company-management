import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Unsubscribable, switchMap } from 'rxjs';
import { User } from 'src/app/core/utilities/types/core-types';
import { UsersService } from '../../users.service';
import { validateHorizontalPosition } from '@angular/cdk/overlay';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
  ],
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit, OnDestroy {
  userService = inject(UsersService);
  private _route = inject(ActivatedRoute);
  router = inject(Router);

  routeSub!: Unsubscribable;

  itemId: string = 'new';
  user!: User;

  form = new FormGroup({
    id: new FormControl<string | null>(null),
    firstName: new FormControl<string | null>(null, [Validators.required]),
    lastName: new FormControl<string | null>(null, [Validators.required]),
    uuid: new FormControl<string | null>(null, [
      Validators.required,
      Validators.minLength(13),
      Validators.maxLength(13),
    ]),
    amount: new FormControl<number>(0, [
      Validators.required,
      Validators.min(800),
    ]),
    dob: new FormControl<Date | null>(null, [Validators.required]),
  });

  constructor() {}

  ngOnInit(): void {
    this.routeSub = this._route.params
      .pipe(
        switchMap((p) => {
          this.itemId = p['id'];

          //return empty kako bi sprijecili slanje requesta kada je id = 'new'
          if (this.itemId === 'new') return EMPTY;
          return this.userService.getUserById(p['id']);
        })
      )
      .subscribe({
        next: (res) => {
          this.user = { ...res };
          this.form.patchValue(res);
        },
        error: (err) => console.error(err),
      });
  }

  goBack() {
    this.router.navigate(['features', 'users']);
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
