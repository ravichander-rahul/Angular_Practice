import { AuthResponseData, AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;
  isLoading=false;
  error:string=null;

  constructor(private authService: AuthService,private router:Router) { }

  ngOnInit(): void {
  }

  onSwitchMode(){
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form:NgForm){
    if(form.invalid)
    return;

    const email=form.value.email;
    const password=form.value.password;
    let authObs$:Observable<AuthResponseData>;

    this.isLoading=!this.isLoading;
    if(this.isLoginMode){
      authObs$=this.authService.login(email,password);
    }else{
      authObs$=this.authService.signUp(email,password);
    }

    authObs$.subscribe(response=>{
      console.log(response);
      this.isLoading=!this.isLoading;
      this.router.navigate(['/recipes']);
    },errorMesaage=>{
      this.isLoading=!this.isLoading;
      this.error=errorMesaage;
    });

    form.reset();

  }

}
