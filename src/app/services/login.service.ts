// import { Injectable } from '@angular/core';
// import { Headers, Http } from '@angular/http';
// import 'rxjs/add/operator/map';
// import {LoginParams} from "../model/LoginParams";
//
// @Injectable()
// export class LoginService
// {
//   private _logged: boolean;
//
//   constructor(private http: Http)
//   {
//     this._logged = false;
//   }
//
//   login(params: LoginParams)
//   {
//     let headers = new Headers();
//     headers.append('Content-Type', 'application/json');
//
//     return this.http.post('http://localhost:8080/login', JSON.stringify(params), {headers: headers})
//       .map(res =>
//       {
//         if(res.status == 200)
//         {
//           this._logged = true;
//           res.json();
//         }
//       });
//   }
//
//   isLogged(): boolean
//   {
//     return this._logged;
//   }
// }
