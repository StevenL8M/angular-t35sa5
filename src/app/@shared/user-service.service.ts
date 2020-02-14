import { Injectable } from '@angular/core';
import { User } from '../models/user/user.component'

@Injectable()
export class UserServiceService {
  


  public user : User;
  constructor() { }

  setUser(user1: User){
    this.user=user1;
    console.log(this.getUser());
    
  }

  getUser(){
    return this.user;
  }



}