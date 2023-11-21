import { Injectable } from "@angular/core";
import { AuthService } from "./auth.service";
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";


@Injectable({
    providedIn:'root',

})



export class AuthGuard {

    constructor(public authService:AuthService ,public router:Router){

    }

    canActivate(
        next:ActivatedRouteSnapshot,
        state:RouterStateSnapshot

    ):
    | Observable<boolean | UrlTree >
      
    | Promise<boolean | UrlTree >
    | boolean

    | UrlTree {

        if(this.authService.isLoggedIn !== true){
            console.log("Ruxsat berilgan");
            this.router.navigate(['login']);
            

        }

        return true;


    }










    
}