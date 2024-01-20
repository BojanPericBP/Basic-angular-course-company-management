import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';
import { User } from '../utilities/types/core-types';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _usernameAdmin = 'admin@gmail.com';
  private readonly _passwordAdmin = '123456';

  private _http = inject(HttpClient);
  private _router = inject(Router);

  private _user!: User;

  public get user() {
    return this._user;
  }

  public login(username: string | null = null, password: string | null = null) {
    console.log(username, password);
    if (this._usernameAdmin !== username || this._passwordAdmin !== password) {
      console.log('Pogresni pristupni podaci');

      return;
    }

    //login logika
    //TODO change any with coresponding type
    //TODO hadnle login logic and routes
    this._http.get<any>(`${environment.apiURL}/login-admin`).subscribe({
      next: (res) => {
        if (!res) return;
        localStorage.setItem('currentUser', JSON.stringify(res));
        this._user = { ...res };
        setTimeout(() => {
          this._router.navigate(['features']);
        }, 400);
      },
      error: (err) => console.log(err),
    });

    //TODO extend login with basic user
  }

  public logout() {
    localStorage.removeItem('currentUser');
    this._router.navigate(['/login']);
  }
}
