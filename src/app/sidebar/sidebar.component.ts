import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { IdeaService } from '../@shared/idea.service';
import { User } from '../models/user';
import { Idea } from '../models/idea';
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
    private ideaService : IdeaService,
    private formBuilder: FormBuilder,
  ) { }

   ngOnInit() {
    this.user = this.userService.getUser();
    this.initForm();
  }

  initForm() {
    this.ideaForm = this.formBuilder.group({
      idee:''
    });
  }

  onIdeaSubmit(){
    let contenu:string = this.ideaForm.value['idee'];
    let pseudo:string = this.user.pseudo;
    this.ideaService.addIdea(new Idea(contenu,pseudo,0,0));
  }



}