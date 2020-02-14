import { Injectable } from '@angular/core';
import { User } from '../models/user/user.component'

@Injectable()
export class UserServiceService {
  


  static user : User;
  constructor() { }

  setUser(user1: User){
    UserServiceService.user=user1;
    console.log(UserServiceService.getUser());
    
  }

  static getUser(){
    return UserServiceService.user;
  }



}