import {Component, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from "./service/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit
{
  users: User[];
  add: boolean;
  currentUser: User;
  usersMail: string;

  constructor(private _userService: UserService)
  {
    this.currentUser = {firstName: '', mail: '', password: '', surname: '', events: []};
    this.add = true;
  }

  ngOnInit() : void
  {
    this.retrieveUsers();
  }

  deleteUser(aMail: string)
  {
    this._userService.deleteUser(aMail).subscribe(() =>
    {
      this.retrieveUsers();
    });

    this.retrieveUsers();
  }

  addOrUpdate(firstName: string, mail: string, password: string, surname: string)
  {
    let user: User = {firstName: firstName, mail: mail, password: password, surname: surname, events: []};

    if(this.add)
    {
      this._userService.addUser(user).subscribe(() =>
      {
        this.retrieveUsers();
      });
    } else
    {
      this._userService.updateUser(this.usersMail, user).subscribe(() => this.retrieveUsers());

      this.clearUser();

      this.add = true;
    }

    this.retrieveUsers();
  }

  private clearUser()
  {
    this.currentUser = {firstName: '', mail: '', password: '', surname: '', events: []};
  }

  retrieveUsers()
  {
    this._userService.getUsers().subscribe(users => this.users = users);
  }

  update(firstName: string, mail: string, password: string, surname: string)
  {
    this.add = false;

    this.currentUser.firstName = firstName;
    this.currentUser.mail = mail;
    this.currentUser.password = password;
    this.currentUser.surname = surname;

    this.usersMail = mail;
  }
}
