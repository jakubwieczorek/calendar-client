import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {User} from "../../model/user";

@Injectable()
export class EventService
{
  URL: string = 'http://localhost:8080/calendar/user/event/';

  constructor(private http: Http) {}

  getEvents(user: User)
  {
    return this.http.get(this.URL + user.mail).map(res => res.json());
  }
}
