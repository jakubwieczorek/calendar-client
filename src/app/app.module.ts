import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeysPipe } from './filters/keys.pipe';
// import { LoginComponent } from './comonents/login/login.component';
import { AdminComponent } from './comonents/admin/admin.component';
import { routing } from './app.routing';
// import {AuthGuard} from "./services/auth-guard";
// import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    // LoginComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    // AuthGuard,
    // LoginService,
    UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
