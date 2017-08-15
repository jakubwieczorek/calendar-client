import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {AdminComponent} from "./admin.component";
import {AdminRoutingModule} from "./admin-routing.module";
import {KeysPipe} from "./pipes/keys.pipe";
import {UserService} from "./service/user.service";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ],
  declarations: [
    AdminComponent,
    KeysPipe
  ],
  providers: [
    UserService
  ]
})
export class AdminModule { }
