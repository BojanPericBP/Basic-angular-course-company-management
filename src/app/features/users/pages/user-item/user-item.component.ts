import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, Unsubscribable, switchMap } from 'rxjs';
import { User } from 'src/app/core/utilities/types/core-types';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.scss'],
})
export class UserItemComponent implements OnInit, OnDestroy {
  userService = inject(UsersService);
  private _route = inject(ActivatedRoute);
  router = inject(Router);

  itemId: string = 'new';

  user!: User;
  routeSub!: Unsubscribable;

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
        next: (res) => (this.user = { ...res }),
        error: (err) => console.error(err),
      });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }
}
