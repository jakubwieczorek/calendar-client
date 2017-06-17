import { Component } from '@angular/core';
import {UserService} from './services/user.service';
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

  constructor(private _userService: UserService) {
    this.retrieveUsers();
  }

  deleteUser(username: string)
  {
    this._userService.deleteUser(username).subscribe();

    this.retrieveUsers();
  }

  addUser(username: string, mail: string)
  {
    let user: User = {username: username, mail: mail};

    this._userService.addUser(user).subscribe();

    this.retrieveUsers();
  }

  retrieveUsers()
  {
    this._userService.getUsers().subscribe(users =>
    {
      this.users = users;
    });
  }

  get userService(): UserService {
    return this._userService;
  }

  set userService(value: UserService) {
    this._userService = value;
  }
}
