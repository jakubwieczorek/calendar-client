import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {UserComponent} from "./user.component";
import {AuthGuard} from "../common/auth-guard";

const userRoutes: Routes =
  [
    {
      path: 'user',
      canActivate: [AuthGuard],
      children :
      [
        {
          path: ':mail',
          component: UserComponent,
        }
      ]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [RouterModule]
})
export class UserRoutingModule { }
