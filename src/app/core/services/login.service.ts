import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

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

    users.forEach((user) => {
      if (userData.login in user) {
        if (userData.password === user.password) {
          return true;
        }
      }
    });
    return false;
  }
}
