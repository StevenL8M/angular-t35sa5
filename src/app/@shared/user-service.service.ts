import { Injectable } from '@angular/core';
import { User } from '../models/user/user.component'

@Injectable()
export class UserServiceService {
  user : User;
  constructor() { }

  setUser(user: User){
    this.user=user;
    console.log(this.user);
    setTimeout(() => {  console.log("World!"); }, 2000);
  }

}