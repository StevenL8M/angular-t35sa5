import { Injectable } from '@angular/core';
import { User } from '../models/user'

@Injectable()
export class UserServiceService {
  user : User;

  constructor() { }

  setUser(pseudo: string){
    this.user= { pseudo: pseudo };
    console.log("console  > ", this.user)
  }

  getUser(){
    return this.user;
  }



}