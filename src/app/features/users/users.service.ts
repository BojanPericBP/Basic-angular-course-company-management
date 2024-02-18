import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { User, UserInput } from 'src/app/core/models/core-types';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private _httpClient = inject(HttpClient);

  public getUsers() {
    return this._httpClient.get<User[]>(environment.apiURL + '/users');
  }

  public getUserById(id: string): Observable<User> {
    return this._httpClient.get<User>(environment.apiURL + '/users/' + id);
  }

  public createUser(data: UserInput) {
    return this._httpClient.post<User>(environment.apiURL + '/users', data);
  }

  public editUser(data: UserInput) {
    return this._httpClient.patch<User>(
      environment.apiURL + '/users/' + data.id,
      data
    );
  }

  public deleteUser(id: string) {
    return this._httpClient.delete(environment.apiURL + '/users/' + id);
  }
}
