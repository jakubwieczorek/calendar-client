import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
import {User} from "../model/user";
import 'rxjs/add/operator/map';

@Injectable()
export class UserService
{
  constructor(private http: Http) {}

  private URL : string = 'http://localhost:8080/calendar/admin/';
  private USER_URL : string = 'http://localhost:8080/calendar/user/';

  getUser(aMail: String)// : Observable<User>
  {
    return this.http.get(this.USER_URL + aMail).map(res => res.json());
      //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  getUsers()// : Observable<User>
  {
    return this.http.get(this.URL).map(res => res.json());
    //.catch((error:any) => Observable.throw(error.json().error || 'Server error'));
  }

  addUser(user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.post(this.URL, JSON.stringify(user), {headers: headers})
      .map(res => res.json());
  }

  deleteUser(aMail: string)
  {
    return this.http.delete(this.URL + aMail).map(res => res.json());
  }

  updateUser(mail: string, user: User)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.URL + mail, JSON.stringify(user),
      {headers: headers}).map(res => res.json());
  }
}
