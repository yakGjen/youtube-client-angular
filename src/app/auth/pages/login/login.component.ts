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

  constructor(
    private route: Router,
    private loginService: LoginService
  ) { }

  public ngOnInit(): void {
    if (!localStorage.length) {
      this.route.navigate(['/registration']);
    }
  }

  public onHandleGoToRegistration(): void {
    this.route.navigate(['/registration']);
  }

  public onHandleSubmit(): void {
    if (this.login === '' || this.password === '') {
      return;
    }

    if (this.loginService.getUser({login: this.login, password: this.password})) {
      this.route.navigate(['/youtube']);
    }
  }

}
