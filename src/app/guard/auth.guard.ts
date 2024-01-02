import { CanActivateFn, Router } from '@angular/router';
import { UserManagementService } from '../services/user-management.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const logged = inject(UserManagementService);
  let loggedVar = false;

  logged.userLogged.subscribe((value) => {
    loggedVar = value;
  });

  if (localStorage.getItem('user')) {
    logged.userLogged.next(true);
    logged.registrationUser.next(JSON.parse(String(localStorage.getItem('user'))));
  }

  if (loggedVar) {
    return true;
  } else {
    router.navigate(['/login']);
    return false;
  }
  //this.router.navigate([`${this.logged.userLogged ? '/home': '/login'}`])
};
