import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserManagementService } from 'src/app/services/user-management.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  formBuilder = inject(FormBuilder);
  form!: FormGroup;
  serviceAddUser = inject(UserManagementService);
  router = inject(Router);

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  onSubmit() {
    if (
      this.form.controls['email'].value == 'mattia@gmail.com' &&
      this.form.controls['password'].value == '1234'
    ) {
      this.serviceAddUser.registrationUser.next(this.form.value);
      this.serviceAddUser.userLogged.next(true);
      this.router.navigate(['/home']);
      localStorage.setItem('user', JSON.stringify(this.form.value));
    } else {
      this.serviceAddUser.userLogged.next(false);
    }
  }
}
