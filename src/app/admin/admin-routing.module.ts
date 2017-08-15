import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AdminComponent} from "./admin.component";

const adminRoutes: Routes =
  [
    {
      path: 'admin',
      component: AdminComponent//,
      //canActivate: [AuthGuard]
    }
  ];

@NgModule({
  imports: [
    RouterModule.forChild(adminRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AdminRoutingModule { }
