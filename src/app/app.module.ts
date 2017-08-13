import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {UserComponent} from "./components/user/user.component";
import {AdminComponent} from "./components/admin/admin.component";
import {LoginComponent} from "./components/login/login.component";
import {KeysPipe} from "./filters/keys.pipe";
import {routing} from "./app.routing";
import {HttpModule} from "@angular/http";
import {FormsModule} from "@angular/forms";
import {AuthGuard} from "./services/auth-guard";
import {LoginService} from "./services/login.service";
import {UserService} from "./services/user.service";
import {AlertModule} from "ngx-bootstrap";
import {EventService} from "./services/event.service";
import {DatePipe} from "@angular/common";

@NgModule({
  declarations: [
    AppComponent,
    KeysPipe,
    LoginComponent,
    AdminComponent,
    UserComponent,
  ],
  imports: [
    AlertModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    LoginService,
    UserService,
    EventService,
    DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule
{}
