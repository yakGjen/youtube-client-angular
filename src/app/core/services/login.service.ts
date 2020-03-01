import { Injectable } from '@angular/core';
import {AuthGuardService} from '../../auth/services/authGuard.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AuthGuardService) { }

  public setUser(userData: object): void {
    let savedData: object[] = [];

    if ('youtube' in localStorage) {
      savedData = JSON.parse(localStorage.getItem('youtube'));
    }

    savedData.push(userData);
    localStorage.setItem('youtube', JSON.stringify(savedData));
  }

  public getUser(userData: {login: string, password: string}): boolean {
    const users: {login: string, password: string}[] = JSON.parse(localStorage.getItem('youtube'));

    return users.some((user) => {
      if (userData.login === user.login) {
        if (userData.password === user.password) {
          this.auth.logIn();
          return true;
        }
      }
    });
  }
}
