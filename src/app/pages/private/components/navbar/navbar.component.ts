import { Component, OnInit, inject } from '@angular/core';
import { UserManagementService } from 'src/app/services/user-management.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  userLog = inject(UserManagementService);
  router = inject(Router);
  logged = this.userLog.userLogged;

  ngOnInit(): void {}

  logout() {
    this.logged.next(false);
    localStorage.clear();
    this.router.navigate(['/login']);
  }
}
