import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {LoginParams} from "../../model/LoginParams";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})

export class LoginComponent
{
  constructor(private _loginService: LoginService, private _router: Router)
  {}

  signIn(mail: string, pass: string)
  {
     const loginParams: LoginParams = {mail: mail, password: pass};

     this._loginService.login(loginParams).subscribe(res =>
     {
       if(res.status == 200)
       {
         this._router.navigate(["/user"])
       }
     });
  }
}
