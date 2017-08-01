import {Routes, RouterModule, CanActivate} from "@angular/router";
import {AdminComponent} from "./components/admin/admin.component";
import {ModuleWithProviders} from "@angular/core";
import {LoginComponent} from "./components/login/login.component";
import {AuthGuard} from "./services/auth-guard";
import {UserComponent} from "./components/user/user.component";

const appRoutes: Routes =
  [
    {
      path: '',
      component: LoginComponent
    },
    {
      path: 'admin',
      component: AdminComponent//,
      //canActivate: [AuthGuard]
    },
    {
      path: 'user',
      component: UserComponent
    }
  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
