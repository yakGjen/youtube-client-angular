import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {LoginComponent} from './pages/login/login.component';
import {RegistrationComponent} from './pages/registration/registration.component';
import { ErrorComponent } from './pages/error/error.component';
import {FormsModule} from '@angular/forms';

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
  exports: []
})
export class AuthModule { }
