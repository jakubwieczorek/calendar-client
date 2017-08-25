import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from "./user/user.component";
import {AdminComponent} from "./admin/admin.component";
import {LoginComponent} from "./login/login.component";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./services/auth-guard";
import {LoginService} from "./login/service/login.service";
import {AlertModule} from "ngx-bootstrap";
import {EventService} from "./user/service/event.service";
import {DatePipe} from "@angular/common";
import {AdminModule} from "./admin/admin.module";
import {LoginModule} from "./login/login.module";
import {UserModule} from "./user/user.module";
import {RegisterModule} from "./register/register.module";
import {HomeModule} from "./home/home.module";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,

    LoginModule,
    AdminModule,
    UserModule,
    RegisterModule,
    HomeModule,
    AppRoutingModule
  ],
  providers: [
    AuthGuard,
    EventService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule
{}
