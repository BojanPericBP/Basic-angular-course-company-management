import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { User } from 'src/app/core/utilities/types/core-types';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _httpClien = inject(HttpClient);

  constructor() {}

  public getUsers() {
    return this._httpClien.get<User[]>(environment.apiURL + '/users');
  }

  public getUserById(id: string) {
    throw new Error('Implement this method');
  }

  public createUser(data: any) {
    throw new Error('Implement this method');
  }

  public editUser(data: any) {
    throw new Error('Implement this method');
  }

  public deleteUser(id: string) {
    throw new Error('Implement this method');
  }
}
