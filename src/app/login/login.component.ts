import { Component } from '@angular/core';
import {LoginService} from "./service/login.service";
import {LoginParams} from "../model/LoginParams";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent
{
  mConflict: boolean;

  constructor(private _loginService: LoginService, private _router: Router, private route: ActivatedRoute)
  {}

  signIn(mail: string, pass: string)
  {
     const loginParams: LoginParams = {mail: mail, password: pass};

     this._loginService.login(loginParams).subscribe(res =>
     {
       if(res.status == 200)
       {
         this._router.navigate(['/user', res.json().mail]);
       } else if(res.status == 204)
       {
         this.mConflict = true;
       }
     });

  }
}
