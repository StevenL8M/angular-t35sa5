import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { UserServiceService } from './@shared/user-service.service';
import { NewUserComponent } from './new-user/new-user.component';
import { RouterModule, Routes } from '@angular/router';
import { BoiteComponent } from './boite/boite.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { IdeaService } from './@shared/idea.service';
import { ListeIdeasComponent } from './liste-ideas/liste-ideas.component';

const appRoutes : Routes = [
  { path: 'boite', component:BoiteComponent },
  { path: 'connexion', component:NewUserComponent },
  { path: '', component:NewUserComponent }
  
  ]

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule, ReactiveFormsModule, RouterModule.forRoot(appRoutes)],
  declarations: [ AppComponent, NewUserComponent, BoiteComponent, SidebarComponent, ListeIdeasComponent ],
  bootstrap:    [ AppComponent ],
  providers: [UserServiceService, IdeaService]
})
export class AppModule { }
