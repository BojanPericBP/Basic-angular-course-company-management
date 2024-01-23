import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);
  let storedUser = JSON.parse(localStorage.getItem('currentUser') || '{}');

  if (!storedUser?.token) {
    alert('Neovlasten pokusaj pristupa sistemu!');
    auth.logout();
    return false;
  }

  return true;
};
