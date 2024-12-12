import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  formLogin: FormGroup = new FormGroup({});
  errorSession: boolean = false;

  constructor(private _authService: AuthService, private router: Router) {

  }

  ngOnInit(): void {
    // Declaramos un formulario que va a tener un campo email y un password
    this.formLogin = new FormGroup(
      {
        email: new FormControl('', [
          // Validaciones
          Validators.required, // Obligatorio
          Validators.email // Formato email
        ]),
        password: new FormControl('', [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(12)
        ])
      }
    );
  }

  sendLogin(): void {
    const { email, password } = this.formLogin.value;

    this._authService.sendCredentials(email, password)
    .subscribe(responseOK => {
      console.log('Sesión iniciada correcta');
      this.router.navigate(['/', 'tracks'])
    },
    err => {
      this.errorSession = true;
      console.log('Ocurrio un error con tu email o password');
    });
  }
}
