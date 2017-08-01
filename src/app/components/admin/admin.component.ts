import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../model/user';

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UserService]
})
export class AdminComponent implements OnInit
{
  users: User[];
  add: boolean;
  currentUser: User;
  usersMail: string;

  constructor(private _userService: UserService)
  {
    this.currentUser = {firstName: '', mail: '', password: '', surname: ''};
    this.add = true;
  }

  ngOnInit() : void
  {
    this.retrieveUsers();
  }

  deleteUser(aMail: string)
  {
    this._userService.deleteUser(aMail).subscribe(user => this.retrieveUsers());

    this.retrieveUsers();
  }

  addOrUpdate(firstName: string, mail: string, password: string, surname: string)
  {
    let user: User = {firstName: firstName, mail: mail, password: password, surname: surname};

    if(this.add)
    {
      this._userService.addUser(user).subscribe(user => this.retrieveUsers());
    } else
    {
      this._userService.updateUser(this.usersMail, user).subscribe(user => this.retrieveUsers());

      this.clearUser();

      this.add = true;
    }
  }

  private clearUser()
  {
    this.currentUser = {firstName: '', mail: '', password: '', surname: ''};
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
