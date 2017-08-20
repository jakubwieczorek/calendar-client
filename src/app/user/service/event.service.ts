import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from "@angular/http";
import {User} from "../../model/user";
import {Event} from "../model/event";

@Injectable()
export class EventService
{
  URL: string = 'http://localhost:8080/calendar/user/event/';

  constructor(private http: Http) {}

  getEvents(user: User)
  {
    return this.http.get(this.URL + user.mail).map(res => this.extractData(res));
  }

  addEvent(event: Event, aMail: string)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.put(this.URL + aMail, JSON.stringify(event), {headers: headers})
      .map(res => this.extractData(res));
  }

  deleteEvent(aEvent: Event, aMail: string)
  {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    return this.http.delete(this.URL + aMail, new RequestOptions({
      headers: headers,
      body: aEvent
    })).map(() => {});
  }

  private extractData(res)
  {
    return res.text() ? res.json() : {};
  }
}
