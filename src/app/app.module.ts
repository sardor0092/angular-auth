import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http'
import { AuthInterceptor } from './shared/authconfig.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [
    AppComponent,
    SiginComponent,
    SigupComponent,
    UserProfilComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    
    ReactiveFormsModule,
    AppRoutingModule,
      
    // CoreModule,
   

    
    
    
  ],
  providers: [

    {

      
    
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true,

    }


  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
