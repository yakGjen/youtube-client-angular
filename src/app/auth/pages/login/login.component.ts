import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

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

  constructor(private route: Router) { }

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

    const users: object = JSON.parse(localStorage.getItem('youtube'));
    // this.route.navigate(['']);
    console.log(users);
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
