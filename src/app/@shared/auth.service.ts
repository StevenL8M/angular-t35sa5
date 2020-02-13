import { Injectable } from '@angular/core';

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

export class User {
  login : string;
}