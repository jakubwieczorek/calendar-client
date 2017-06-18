import { Component } from '@angular/core';
import {UserService} from './services/user.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService]
})

export class AppComponent {

  users: User[];
  username: string;
  mail: string;
  inputUsername: string;
  inputMail: string;
  add: boolean;

  constructor(private _userService: UserService)
  {
    this.retrieveUsers();

    this.add = true;
  }

  deleteUser(username: string)
  {
    this._userService.deleteUser(username).subscribe();

    this.retrieveUsers();
  }

  addOrUpdate(username: string, mail: string)
  {
    let user: User = {username: username, mail: mail};

    if(this.add)
    {
      this._userService.addUser(user).subscribe();
    } else
    {
      this._userService.updateUser(username, user).subscribe();

      this.inputUsername = '';
      this.inputMail = '';

      this.add = true;
    }

    this.retrieveUsers();
  }

  retrieveUsers()
  {
    this._userService.getUsers().subscribe(users =>
    {
      this.users = users;
    });
  }

  update(username: string, mail: string)
  {
    this.add = false;

    this.inputMail = mail;
    this.inputUsername = username;
  }

  get userService(): UserService {
    return this._userService;
  }

  set userService(value: UserService) {
    this._userService = value;
  }
}
