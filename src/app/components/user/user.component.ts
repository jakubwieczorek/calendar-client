import { Component, OnInit } from '@angular/core';
import {Template} from "../util/templates";
import {TemplateAware} from "../util/templateDec";

@Component({
  selector: 'user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

@TemplateAware
export class UserComponent implements OnInit {

  private _template: Template = Template.SPAN;
  date: Date = new Date(2016, 5, 7);

  constructor() {
  }

  ngOnInit() {
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
