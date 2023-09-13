import { ToastrService } from 'ngx-toastr';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../_services/auth/auth.service';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';
import { passwordMatchValidator } from '../../_shared/password/password-match.directive'
import moment from 'moment';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  // Seta o limite mínimo de caracteres para a senha
  minPW = 8;
  // Seta a data mínima para dia 1 de Janeiro 40 anos no passado e a data máxima para 31 de Dezembro 17 anos no passado
  currentYear = new Date().getFullYear();
  minDate = new Date(this.currentYear - 40, 0, 1);
  maxDate = new Date(this.currentYear -17, 11, 31);

  constructor(
    private toast: ToastrService,
    private authService: AuthService,
    private router: Router
  ) { }

  registerForm: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    firstname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    birthday: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(this.minPW)]),
    passwordConfirm: new FormControl('', [Validators.required]),
  }, { validators: passwordMatchValidator });
  hide = true;

  onPasswordInput() {
    if (this.registerForm.controls['passwordConfirm']?.value == '')
      this.registerForm.controls['passwordConfirm']?.setErrors({required: true});
    else if (this.registerForm.hasError('passwordMismatch'))
      this.registerForm.controls['passwordConfirm']?.setErrors({'passwordMismatch': true});
    else
      this.registerForm.controls['passwordConfirm']?.setErrors(null);
  }

  get f() { return this.registerForm.controls; };

  register() {
    // Stop here if form is invalid
    if (this.registerForm.invalid) {
      this.toast.error('Preencha todos os campos!', 'Register')
      return;
    }

    let name = this.f['name'].value;
    let firstname = this.f['firstname'].value;
    let email = this.f['email'].value;
    let birthday = moment(this.f['birthday'].value.toString()).toISOString();
    let password = this.f['password'].value;

    this.authService.register(name, firstname, email, birthday, password)
      .pipe(first())
        .subscribe(
          data => {
            // Auto login after register
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
          },
        error => {
          console.log("Register Error", error);
          error.error.mensagensErro.forEach((element: string | undefined) => {
            this.toast.error(element, 'Register')
          });
        });
  }

}
