import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { UserManagementService } from '../services/user-management.service';

export const navigateGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logged = inject(UserManagementService);

  if (localStorage.getItem('user')) {
    router.navigate(['/home']);
    logged.userLogged.next(true);
    return false;
  }

  return true;
};
