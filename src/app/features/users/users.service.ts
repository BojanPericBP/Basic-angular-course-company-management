import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { UserInput } from 'src/app/core/utilities/types/core-types';
import { toSignal } from '@angular/core/rxjs-interop';

@Injectable({
  providedIn: 'root',
})
export class UsersService extends BaseService {
  http = inject(HttpClient);

  users = signal<any>([]);

  // constructor() { }

  usersList() {
    return toSignal(this.http.get(this.url + '/users'));
  }

  createUser(data: UserInput | null = null) {
    return this.http.post<UserInput>(this.url + '/users', {
      firstName: 'Bojan',
      lastName: 'Peric',
    });
  }

  updateUser(data: UserInput) {
    return this.http.put(this.url + '/users/' + data?.id, data);
  }
}
