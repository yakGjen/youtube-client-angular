import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './auth/pages/login/login.component';
import {RegistrationComponent} from './auth/pages/registration/registration.component';
import {ErrorComponent} from './auth/pages/error/error.component';
import {YoutubeModule} from './youtube/youtube.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'youtube', loadChildren: './youtube/youtube.module#YoutubeModule'},
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
