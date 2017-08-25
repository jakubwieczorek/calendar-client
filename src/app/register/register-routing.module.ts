import { NgModule } from '@angular/core';
import {RegisterComponent} from "./register.component";
import {RouterModule, Routes} from "@angular/router";

const registerRoutes: Routes =
  [
    {
      path: 'register',
      component: RegisterComponent
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(registerRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RegisterRoutingModule { }
