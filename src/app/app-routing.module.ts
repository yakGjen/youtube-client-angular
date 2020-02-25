import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './auth/pages/login/login.component';
import {SearchResultsComponent} from './youtube/pages/search-results/search-results.component';
import {RegistrationComponent} from './auth/pages/registration/registration.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  {path: 'youtube', component: SearchResultsComponent},
  {path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
