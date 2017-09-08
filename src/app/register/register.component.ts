import {Component, Input, OnInit} from '@angular/core';
import {UserService} from "../admin/service/user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";
import {map} from "rxjs/operator/map";
import {RegisterService} from "./register.service";
import {GenericService} from "../common/generic.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit
{
  mSignUpClicked: Boolean;
  userData: User;
  isMailBusy: Boolean;

  constructor(private _userService: UserService, private _router: Router, private _registerService: RegisterService)
  {
    this.isMailBusy = false;
    this.mSignUpClicked = false;
    this.userData = {firstName: "", surname: "", events: [], password: "", mail: ""};
  }

  ngOnInit() {
  }

  checkBusy(): void
  {
    this.isMailBusy = false;

    this._registerService.getMail(this.userData.mail).subscribe((response)=>
    {
      if(response.status == 200) // ok
      {
        this.isMailBusy = false;
      } else if(response.status == 201) // busy
      {
        this.isMailBusy = true;
      }
    });
  }

  register(aFirstName: string, aMail: string, aPassword: string, aSurname: string)
  {
    this.mSignUpClicked = true;

    this.userData = {firstName: aFirstName, mail: aMail, password: aPassword, surname: aSurname, events: []};

      this._userService.addUser(this.userData).subscribe(res =>
      {
        this._router.navigate(['/user', this.userData.mail]);
      });
  }
}
