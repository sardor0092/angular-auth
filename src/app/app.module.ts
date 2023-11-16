import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {HttpClientModule} from '@angular/common/http'



@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigupComponent,
    UserProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
