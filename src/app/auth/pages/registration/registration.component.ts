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

  // public alert: string = '';
  public alertLogin: string = '';
  public alertPassword: string = '';

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  public onHandleSubmit(): void {
    if (this.login === '') {
      this.alertLogin = 'this field must be fill';
      return;
    }
    if (this.password === '') {
      this.alertPassword = 'this field must be fill';
      return;
    }

    // localStorage.setItem('youtube', JSON.stringify([{'login': this.login, 'password': this.password}]));
    this.loginService.setUser({'login': this.login, 'password': this.password});
    this.route.navigate(['']);
  }

}
