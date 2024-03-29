import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {LoginComponent} from "./login.component";
import {AuthGuard} from "../common/auth-guard";

const loginRouting: Routes = [
    {
      path: 'login',
      component: LoginComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(loginRouting)
  ],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
