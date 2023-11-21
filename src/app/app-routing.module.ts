import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SiginComponent } from './sigin/sigin.component';
import { SigupComponent } from './sigup/sigup.component';
import { UserProfilComponent } from './user-profil/user-profil.component';
import { AuthGuard } from './shared/aut.guard';



const routes: Routes = [


  {path:'' ,redirectTo: '/login' , pathMatch:'full'},
  {path:'login', component:SiginComponent},
  {path:'signup' ,component:SigupComponent},
  {path:'user/:id',component:UserProfilComponent,
   canActivate:[AuthGuard]}

];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})









export class AppRoutingModule { }
