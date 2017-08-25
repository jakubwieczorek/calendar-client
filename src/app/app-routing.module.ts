import {Routes, RouterModule, CanActivate} from "@angular/router";
import {ModuleWithProviders, NgModule} from "@angular/core";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./services/auth-guard";

const appRoutes: Routes =
  [
    {
      path: '**',
      redirectTo: 'home',
    },
    {
      path: '',
      redirectTo: 'home',
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
