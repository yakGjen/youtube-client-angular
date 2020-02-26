import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import {LoginService} from '../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public login: string = '';
  public password: string = '';

  public alertLogin: string = '';
  public alertPassword: string = '';

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    if (!localStorage.length) {
      this.route.navigate(['/registration']);
    }
  }

  public onHandleSubmit(): void {
    if (this.login === '') {
      this.alertLogin = 'this field must be fill';
      return;
    }
    if (this.password === '') {
      this.alertPassword = 'this field must be fill';
      return;
    }

    // const users: object = JSON.parse(localStorage.getItem('youtube'));
    // this.route.navigate(['']);
    // console.log(this.loginService.getUser({login: this.login, password: this.password}));
    if (this.loginService.getUser({login: this.login, password: this.password})) {
      this.route.navigate(['/youtube']);
    }
  }

  public onHandleCheckInput(): void {
    if (this.login !== '') {
      this.alertLogin = '';
    }
    if (this.password !== '') {
      this.alertPassword = '';
    }
  }

}
