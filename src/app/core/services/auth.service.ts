import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _usernameAdmin = 'admin@gmail.com';
  private readonly _passwordAdmin = '123456';

  private _http = inject(HttpClient);
  private _router = inject(Router);

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
      next: (res) => console.log('login response', res),
      error: (err) => console.log(err),
    });

    //TODO extend login with basic user

    this._router.navigate(['features']);
  }
}
