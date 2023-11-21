import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sigup',
  templateUrl: './sigup.component.html',
  styleUrls: ['./sigup.component.scss']
})
export class SigupComponent implements OnInit {

  signupForm:FormGroup;

  constructor(public fb:FormBuilder , public autService:AuthService
    , public router:Router) {

      this.signupForm =  this.fb.group({
        name: [''],
        email:[''],
        password:['']

      }); 
    }

    registerForm (){
      this.autService.sigUp(this.signupForm.value)
      .subscribe((res)=>{
        this.signupForm.reset();
        this.router.navigate(['login']);

      });

    }



   




  ngOnInit(): void {

    console.log(this.signupForm);
    
    
  }

}
