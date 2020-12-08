import { AuthService } from './auth.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  isLoginMode = true;

  constructor(private authService: AuthService) { }

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

    if(this.isLoginMode){

    }else{
      this.authService.signUp(email,password).subscribe(response=>{
        console.log(response);

      },error=>{
        console.log(error);

      });
    }

    form.reset();

  }

}
