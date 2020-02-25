import { Injectable } from '@angular/core';
import { Idea } from '../models/idea'

@Injectable()
export class IdeaService {
  ideas : Array<Idea>=[];

  constructor() { }

  getIdeas(){
    return this.ideas;
  }

  addIdea(idee:Idea){
    this.ideas.push(idee);
  }

  getSpecificIdea(index:number){
    return this.ideas[index];
  }

}