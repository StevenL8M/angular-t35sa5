import { Injectable } from '@angular/core';
import { User } from '../models/user/user.component';

@Injectable()
export class AuthService {
  private user : User;

  constructor() { }

  authent(login:string){
    this.user.login=login;
  }

  get(){
    return this.user;
  }

}