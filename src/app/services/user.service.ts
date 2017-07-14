import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from "../model/user";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class UserService
{
  constructor(private http: Http) {}

  getUsers()// : Observable<User>
  {
    return this.http.get('http://localhost:8080/users/').map(res => res.json())
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/users/', JSON.stringify(user), {headers: headers})
      .map(res => res.json());
  }

  deleteUser(aMail: string)
  {
    return this.http.delete('http://localhost:8080/users/' + aMail).map(res => res.json());
  }

  updateUser(mail: string, user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put('http://localhost:8080/users/' + mail, JSON.stringify(user),
      {headers: headers}).map(res => res.json());
  }
}
