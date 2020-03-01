import { Injectable } from '@angular/core';
import {AuthService} from '../../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private auth: AuthService) { }

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

    let resp: boolean = users.some((user) => {
      if (userData.login === user.login) {
        if (userData.password === user.password) {
          return true;
        }
      }
    });
    return resp;
  }
}
