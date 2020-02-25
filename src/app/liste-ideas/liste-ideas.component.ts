import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { IdeaService } from '../@shared/idea.service';
import { Idea } from '../models/idea';

@Component({
  selector: 'liste-ideas',
  templateUrl: './liste-ideas.component.html',
  styleUrls: ['./liste-ideas.component.css']
})
export class ListeIdeasComponent implements OnInit {
  public idees:Idea[];
  constructor(private ideaService:IdeaService) {}

  ngOnInit() {
    this.idees = this.ideaService.getIdeas();
  }

  down(idee:Idea){
    idee.voteDown++;
  }

  up(idee:Idea){
    idee.voteUp++;
  }

}