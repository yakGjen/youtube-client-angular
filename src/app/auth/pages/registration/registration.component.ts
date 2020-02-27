import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../../../core/services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent {

  public login: string = '';
  public password: string = '';

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  public onHandleGoToLogin(): void {
    this.route.navigate(['']);
  }

  public onHandleSubmit(): void {
    if (this.login === '' || this.password === '') {
      return;
    }

    this.loginService.setUser({'login': this.login, 'password': this.password});
    this.route.navigate(['']);
  }

}
