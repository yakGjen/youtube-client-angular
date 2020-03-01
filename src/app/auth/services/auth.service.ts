import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  public isWorks(): void {
    console.log('works');
  }
}
