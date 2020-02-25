import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { IdeaService } from '../@shared/idea.service';
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
    private ideaService : IdeaService,
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
    const contenu = this.ideaForm.value['idee'];
    const pseudo = this.userService.getUser().pseudo;
    this.ideaService.addIdea(contenu, pseudo);
    console.log(contenu );
  }



}