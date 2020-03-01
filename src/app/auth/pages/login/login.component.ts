import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('loginForm') public loginForm: ElementRef;
  @ViewChild('loginInput') public loginInput: ElementRef;
  @ViewChild('loginPassword') public loginPassword: ElementRef;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private renderer2: Renderer2
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

      if (this.login === '') {
        this.renderer2.addClass(this.loginInput.nativeElement, 'login__input_invalid');
      }

      if (this.password === '') {
        this.renderer2.addClass(this.loginPassword.nativeElement, 'login__input_invalid');
      }

      return;
    }

    if (this.loginService.getUser({login: this.login, password: this.password})) {
      this.route.navigate(['/youtube']);
    }
  }

}
