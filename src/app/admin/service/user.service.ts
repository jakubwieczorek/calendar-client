import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from "../../model/user";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService
{
  constructor(private http: Http) {}

  private URL : string = 'http://localhost:8080/calendar/admin/';
  private USER_URL : string = 'http://localhost:8080/calendar/user/';

  getUser(aMail: String)// : Observable<User>
  {
    return this.http.get(this.USER_URL + aMail).map(res => this.extractData(res));
  }

  getUsers()// : Observable<User>
  {
    return this.http.get(this.URL).map(res => this.extractData(res));
  }

  addUser(user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.URL, JSON.stringify(user), {headers: headers})
      .map(() => {});
  }

  deleteUser(aMail: string)
  {
    return this.http.delete(this.URL + aMail).map(() => {});
  }

  updateUser(mail: string, user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.URL + mail, JSON.stringify(user || null),
      {headers: headers}).map(() => {});
  }

  private extractData(res)
  {
    return res.text() ? res.json() : {};
  }
}
