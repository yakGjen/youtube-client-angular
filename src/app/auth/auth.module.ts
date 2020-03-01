import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import {ErrorComponent} from './pages/error/error.component';
import {AuthGuardService} from './services/authGuard.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [AuthGuardService],
  exports: []
})
export class AuthModule { }
