import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { LoginformComponent } from './loginform/loginform.component';
import { User } from './models/user/user.component';
import { UserServiceService } from './@shared/user-service.service';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, ReactiveFormsModule ],
  declarations: [ AppComponent, LoginformComponent, User, NewUserComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserServiceService]
})
export class AppModule { }
