import { Injectable } from '@angular/core';
import {
  CanLoad,
  Route, Router,
} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable()
export class AuthGuardService implements CanLoad {
  private loggedIn: boolean = false;

  constructor(private route: Router) {}

  /*
  get && set loggedIn
   */

  public logIn(): void {
    this.loggedIn = true;
  }

  public canLoad(route: Route): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.loggedIn) {
      this.route.navigate(['']);
      return this.loggedIn;
    }
    return this.loggedIn;
  }
}
