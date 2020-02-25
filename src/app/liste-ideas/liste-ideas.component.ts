import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { IdeaService } from '../@shared/idea.service';
import { Idea } from '../models/idea';
import { User } from '../models/user';

@Component({
  selector: 'liste-ideas',
  templateUrl: './liste-ideas.component.html',
  styleUrls: ['./liste-ideas.component.css']
})
export class ListeIdeasComponent implements OnInit {
  public idees:Idea[];
  private user:User;
  constructor(private ideaService:IdeaService,
              private userService:UserServiceService) {}

  ngOnInit() {
    this.idees = this.ideaService.getIdeas();
    let elements=document.querySelectorAll('.btnClose');
    for(let elem in elements){
      console.log(elem.keys);
    }
    this.user = this.userService.getUser();
  }

  down(idee:Idea){
    if(this.user.pseudo != idee.auteur){
      idee.voteDown++;
    }
  }

  up(idee:Idea){
    if(this.user.pseudo != idee.auteur){
      idee.voteUp++;
    }
  }

  delete(idee:Idea){
    if(this.user.pseudo == idee.auteur){
      let index:number=this.ideaService.getIdeas().indexOf(idee);
        this.ideaService.ideas.splice(index, 1);
    }
  }

}