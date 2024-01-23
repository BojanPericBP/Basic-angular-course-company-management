import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../users.service';
import { User } from 'src/app/core/utilities/types/core-types';
import { Unsubscribable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

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

  itemId: string = 'INICIJALNA VRIJEDNOST ID_A';

  user!: User;
  userSub!: Unsubscribable;
  routeSub!: Unsubscribable;

  constructor() {}

  ngOnInit(): void {
    this.routeSub = this._route.params.subscribe((p) => {
      this.itemId = p['id'];
      console.log('ID iz rute', p['id']);

      this.userSub = this.userService.getUserById(this.itemId).subscribe({
        next: (res) => {
          console.log('get one user by id', res);
          this.user = { ...res };
          this.userSub?.unsubscribe();
        },
        error: (err) => console.error(err),
      });
    });
  }

  i = 0;
  kme() {
    ++this.i;
    this.router.navigate(['features', 'users', this.i]);
  }

  ngOnDestroy(): void {
    this.userSub?.unsubscribe();
    this.routeSub?.unsubscribe();
  }
}
