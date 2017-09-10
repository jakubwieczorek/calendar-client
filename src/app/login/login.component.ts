import { Component } from '@angular/core';
import {LoginService} from "./service/login.service";
import {LoginParams} from "../model/LoginParams";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent
{
  mConflict: boolean;

  constructor(private _loginService: LoginService, private _router: Router)
  {}

  signIn(mail: string, pass: string)
  {
     const loginParams: LoginParams = {mail: mail, password: pass};

     this._loginService.login(loginParams).subscribe(res =>
     {
       if(res.status == 200)
       {
         this._loginService._logged = true;

         console.log("LoginComponent " + this._loginService._logged);
         //console.log("LoginComponent " + this._loginService.redirectUrl);
         this._router.navigate(['/user', res.json().mail]);
         // this._router.navigate([this._loginService.redirectUrl]);
       } else if(res.status == 204)
       {
         this.mConflict = true;
       }
     });

  }
}
