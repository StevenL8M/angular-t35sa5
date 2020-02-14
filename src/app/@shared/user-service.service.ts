import { Injectable } from '@angular/core';
import { User } from '../models/user'

@Injectable()
export class UserServiceService {
  user : User;

  constructor() { }

  setUser(pseudo: string){
    this.user= { pseudo: pseudo };
  }

  getUser(){
    return this.user;
  }



}