import { Component } from '@angular/core';
import {LoginService} from "../../services/login.service";
import {LoginParams} from "../../model/LoginParams";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [LoginService]
})
export class LoginComponent
{
  constructor(private _loginService: LoginService)
  {}

  signIn(mail: string, pass: string)
  {
     const loginParams: LoginParams = {mail: mail, password: pass};

     this._loginService.login(loginParams).subscribe(user =>
     {
       console.log('siema')
     });
  }
}
