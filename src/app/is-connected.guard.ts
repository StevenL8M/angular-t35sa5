import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from './@shared/user-service.service';
import { User } from './models/user';



@Injectable({
    providedIn: 'root'
})
export class IsConnectedGuard implements CanActivate {
  constructor(private serviceUser:UserServiceService){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.serviceUser.getUser()!=null){
          return this.serviceUser.getUser().pseudo.trim()!="";
      }
      else{
        return false;
       }
     }
}
