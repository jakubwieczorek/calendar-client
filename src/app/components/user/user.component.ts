import {Component, OnInit, SystemJsNgModuleLoader} from '@angular/core';
import {Template} from "../util/templates";
import {TemplateAware} from "../util/templateDec";
import {User} from "../../model/user";
import {Event} from "../../model/event";
import {EventService} from "../../services/event.service";
import {UserService} from "../../services/user.service";
import {DatePipe} from "@angular/common";

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

  constructor(private _eventService: EventService, private _userService: UserService, private _datePipe: DatePipe)
  {
    this.loggedUser = {firstName: '', mail: '', password: '', surname: '', events: []};
    this.events = [{description: '', eventDate: new Date()}];
  }

  ngOnInit()
  {
    this._userService.getUser("wieczor1234@op.pl").subscribe(user =>
    {
      this.loggedUser = user;

      this.retrieveEvents();
    });
  }

  retrieveEvents() : void
  {
    this._eventService.getEvents(this.loggedUser).subscribe((events: Event []) =>
    {
      this.events = events;
    });
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
