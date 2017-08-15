import {Routes, RouterModule, CanActivate} from "@angular/router";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard";

const appRoutes: Routes =
  [
    {
      path: 'login',
      component: LoginComponent
    },
    {
      path: '**',
      redirectTo: 'login',
    },
    {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }
  ];

@NgModule
({
  imports:
  [
    RouterModule.forRoot
    (
      appRoutes
      // ,{enableTracing: true}
    )
  ],
  exports:
    [
      RouterModule
    ]
})

export class AppRoutingModule {}
