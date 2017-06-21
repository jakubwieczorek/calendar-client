import {Routes, RouterModule} from "@angular/router";
import {AdminComponent} from "./comonents/admin/admin.component";
import {LoginComponent} from "./comonents/login/login.component";
import {ModuleWithProviders} from "@angular/core";

const appRoutes: Routes =
  [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'admin',
      component: AdminComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
