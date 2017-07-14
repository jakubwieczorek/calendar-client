import {Routes, RouterModule, CanActivate} from "@angular/router";
import {AdminComponent} from "./comonents/admin/admin.component";
// import {LoginComponent} from "./comonents/login/login.component";
import {ModuleWithProviders} from "@angular/core";
// import {AuthGuard} from "./services/auth-guard";

const appRoutes: Routes =
  [
    // {
    //   path: '',
    //   // component: LoginComponent
    // },
    {
      path: 'admin',
      component: AdminComponent
      //canActivate: [AuthGuard]
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
