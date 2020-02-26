import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import {CoreModule} from './core/core.module';
import {YoutubeModule} from './youtube/youtube.module';
import {AuthModule} from './auth/auth.module';

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
    /*YoutubeModule,*/
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
