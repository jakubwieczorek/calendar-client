import {Component, OnInit} from '@angular/core';
import {Template} from "../util/templates";
import {TemplateAware} from "../util/templateDec";
import {User} from "../model/user";
import {Event} from "../model/event";
import {EventService} from "./service/event.service";
import {UserService} from "../admin/service/user.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@TemplateAware
export class UserComponent implements OnInit
{
  loggedUser : User;
  events: Event [];

  private _template: Template = Template.SPAN;

  constructor(private _eventService: EventService, private _userService: UserService, private route: ActivatedRoute, private router: Router)
  {
    this.loggedUser = {firstName: '', mail: '', password: '', surname: '', events: []};
    this.events = [{description: '', eventDate: new Date()}];
  }

  ngOnInit()
  {
    console.log(this.route.snapshot.paramMap.get('mail'));

    this.route.paramMap.switchMap((params: ParamMap) =>
      this._userService.getUser(params.get('mail')))
      .subscribe((user: User) =>
      {
        this.loggedUser = user;
        this.retrieveEvents();
      });

    console.log('dupa');
    console.log(this.loggedUser.mail)
  }

  retrieveEvents() : void
  {
    this._eventService.getEvents(this.loggedUser).subscribe((events: Event []) =>
      this.events = events);
  }

  changeValue(aString: string): void
  {
    console.log("siema co tam " + aString);
  }

  get template(): Template
  {
    return this._template;
  }

  set template(value: Template)
  {
    this._template = value;
  }
}