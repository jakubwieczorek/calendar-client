import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RegisterComponent} from "./register.component";
import {FormsModule} from "@angular/forms";
import {RegisterRoutingModule} from "./register-routing.module";
import {UserService} from "../admin/service/user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RegisterRoutingModule
  ],
  declarations: [RegisterComponent],
  providers: [
    UserService
  ]
})
export class RegisterModule { }
