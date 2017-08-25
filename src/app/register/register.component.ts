import { Component, OnInit } from '@angular/core';
import {UserService} from "../admin/service/user.service";
import {User} from "../model/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _userService: UserService, private _router: Router) { }

  ngOnInit() {
  }

  register(aFirstName: string, aMail: string, aPassword: string, aSurname: string)
  {
    let user: User = {firstName: aFirstName, mail: aMail, password: aPassword, surname: aSurname, events: []}
    this._userService.addUser(user).subscribe(res =>
    {
      if(res.status == 200)
      {
        this._router.navigate(['/user', res.json().mail]);
      }
    });
  }
}
