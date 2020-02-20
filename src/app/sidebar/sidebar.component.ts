import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { User } from '../models/user';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User;
  ideaForm:FormGroup;
  constructor(
    private userService : UserServiceService,
    private formBuilder: FormBuilder,
  ) { }

   ngOnInit() {
    this.user = this.userService.getUser();
    this.initForm();
  }

  initForm() {
    this.ideaForm = this.formBuilder.group({
      contenu:'',
      auteur:'',
      voteUp:'',
      voteDown:''
    });
  }

  onIdeaSubmit(){

  }



}