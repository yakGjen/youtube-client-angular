import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
// import { HeaderComponent } from './core/pages/header/header.component';
// import { SearchResultsComponent } from './youtube/pages/search-results/search-results.component';
// import { SearchItemComponent } from './youtube/components/search-item/search-item.component';
// import { FilteringComponent } from './core/pages/filtering/filtering.component';
import {CoreModule} from './core/core.module';
import {YoutubeModule} from './youtube/youtube.module';
import {AuthModule} from './auth/auth.module';
// import { LoginComponent } from './auth/pages/login/login.component';
// import { RegistrationComponent } from './auth/pages/registration/registration.component';

@NgModule({
  declarations: [
    AppComponent,
    /*LoginComponent,
    RegistrationComponent,*/
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /*FormsModule,*/
    CoreModule,
    YoutubeModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
