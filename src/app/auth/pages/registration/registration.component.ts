import {Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
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

  @ViewChild('registrationInput') public registrationInput: ElementRef;
  @ViewChild('registrationPassword') public registrationPassword: ElementRef;

  constructor(
    private route: Router,
    private loginService: LoginService,
    private renderer2: Renderer2
  ) { }

  public onHandleGoToLogin(): void {
    this.route.navigate(['']);
  }

  public onHandleSubmit(): void {
    if (this.login === '' || this.password === '') {

      if (this.login === '') {
        this.renderer2.addClass(this.registrationInput.nativeElement, 'registration__input_invalid');
      }

      if (this.password === '') {
        this.renderer2.addClass(this.registrationPassword.nativeElement, 'registration__input_invalid');
      }

      return;
    }

    this.loginService.setUser({'login': this.login, 'password': this.password});
    this.route.navigate(['']);
  }

}
