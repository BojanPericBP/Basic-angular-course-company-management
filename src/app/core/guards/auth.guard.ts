import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';

export const authGuard: CanActivateFn = (route, state) => {
  let auth = inject(AuthService);

  if (!auth.user?.token) {
    alert('Neovlasten pokusaj pristupa sistemu!');
    auth.logout();
    return false;
  }

  return true;
};
