import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { KeysPipe } from './filters/keys.pipe';
import { AdminComponent } from './components/admin/admin.component';
import { routing } from './app.routing';
import {UserService} from "./services/user.service";
import {LoginComponent} from "./components/login/login.component";
import {LoginService} from "./services/login.service";
import {AuthGuard} from "./services/auth-guard";
import { UserComponent } from './components/user/user.component';
// import {
//   AccordionModule,
//   DatepickerModule,
//   ModalModule,
//   TimepickerModule
// } from 'ng2-bootstrap';

@NgModule({
  declarations: [
    // DatepickerModule,
    AppComponent,
    KeysPipe,
    LoginComponent,
    AdminComponent,
    UserComponent
  ],
  imports: [
    // NKDatetimeModule,
    // DatepickerModule.forRoot(),
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AuthGuard,
    LoginService,
    UserService
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
