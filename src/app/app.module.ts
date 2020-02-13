import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { AuthService } from './@shared/auth.service';
import { User } from './models/user/user.component';
import { UserServiceService } from './@shared/user-service.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule ],
  declarations: [ AppComponent, LoginformComponent, User ],
  bootstrap:    [ AppComponent ],
  providers: [AuthService, UserServiceService]
})
export class AppModule { }
