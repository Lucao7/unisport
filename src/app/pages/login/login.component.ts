import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  minPW = 8;

  constructor(
    private toast: ToastrService,
    private authService: AuthService,
    private router: Router,
  ) { }

  loginForm : FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.minPW)]),
  });
  hide = true;

  get f() { return this.loginForm.controls; };

  login() {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.toast.error('Preencha todos os campos!', 'Register')
      return;
    }

    let email = this.f['email'].value;
    let password =this.f['password'].value;

    this.authService.login(email, password)
      .pipe(first())
      .subscribe(
        data => {
          this.router.navigate(['/dashboard']);
        },
        error => {
          console.log("Login Error", error);
          error.error.mensagensErro.forEach((element: string | undefined) => {
            this.toast.error(element, 'Register')
          });
        });
  }
}
