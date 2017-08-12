import { Component, OnInit } from '@angular/core';
import {Template} from "../util/templates";
import {TemplateAware} from "../util/templateDec";
import {User} from "../../model/user";
import {logger} from "codelyzer/util/logger";
import * as events from "events";
import {EventService} from "../../services/event.service";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@TemplateAware
export class UserComponent implements OnInit
{
  loggedUser : User;

  private _template: Template = Template.SPAN;
  private _eventService: EventService;

  constructor()
  {
    this.loggedUser = {firstName: '', mail: '', password: '', surname: '', events: []};
  }

  ngOnInit()
  {
  }

  retrieveEvents() : void
  {
    this._eventService.getEvents(this.loggedUser);
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
