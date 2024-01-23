import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersService } from '../../users.service';
import { first } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  userService = inject(UsersService);
  users: any;
  constructor() {
    console.log('USERS LIST');
    this.users = this.userService.usersList();
  }

  createUserTest() {
    this.userService
      .createUser()
      .pipe(first())
      .subscribe({
        next: (res) => {
          console.log('user created', res);
        },
        error: (err) => console.error(err),
      });
  }

  updateUser() {
    this.userService
      .updateUser({ id: '1', firstName: 'Bojan', lastName: 'rope' })
      .pipe(first())
      .subscribe({
        next: (res) => {
          console.log('user updated', res);
        },
        error: (err) => console.error(err),
      });
  }
}
