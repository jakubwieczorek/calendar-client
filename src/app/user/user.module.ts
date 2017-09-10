import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {UserRoutingModule} from "./user-routing.module";
import {UserComponent} from "./user.component";
import {UserService} from "../admin/service/user.service";
import {AuthGuard} from "../common/auth-guard";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule
  ],
  declarations: [
    UserComponent
  ],
  providers: [
    UserService,
  ]
})
export class UserModule { }
