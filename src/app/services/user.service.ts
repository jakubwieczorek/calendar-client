import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {User} from "../model/user";

@Injectable()
export class UserService
{
  constructor(private http: Http) {}

  getUsers()
  {
    return this.http.get('http://localhost:8080/users/').map(res => res.json());
  }

  addUser(user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post('http://localhost:8080/users/', JSON.stringify(user), {headers: headers})
      .map(res => res.json());
  }

  deleteUser(username: string)
  {
    return this.http.delete('http://localhost:8080/users/' + username).map(res => res.json());
  }
}
