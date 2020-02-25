import { Injectable } from '@angular/core';
import { Idea } from '../models/idea'

@Injectable()
export class IdeaService {
  ideas : Array<Idea>;

  constructor() { }

  getIdeas(){
    return this.ideas;
  }

  addIdea(contenu:string, auteur:string){
    this.ideas.push(new Idea(contenu,auteur,0,0));
  }

  getSpecificIdea(index:number){
    return this.ideas[index];
  }

}