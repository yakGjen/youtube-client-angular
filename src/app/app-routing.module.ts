import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './auth/pages/login/login.component';
import {SearchResultsComponent} from './youtube/pages/search-results/search-results.component';
import {RegistrationComponent} from './auth/pages/registration/registration.component';
import {ErrorComponent} from './auth/pages/error/error.component';
import {YoutubeModule} from './youtube/youtube.module';

const routes: Routes = [
  {path: '', pathMatch: 'full', component: LoginComponent},
  /*{path: 'youtube', component: SearchResultsComponent},*/
  {path: 'youtube', loadChildren: './youtube/youtube.module#YoutubeModule'},
  /*{path: 'youtube', loadChildren: () => import('./youtube/youtube.module').then(m => m.YoutubeModule)},*/
  {path: 'registration', component: RegistrationComponent},
  {path: '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
