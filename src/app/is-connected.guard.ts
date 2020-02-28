import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserServiceService } from '@shared/user-service.service';
import { User } from 'models/user';

@Injectable()
export class IsConnectedGuard implements CanActivate {
  serviceUser:UserServiceService;
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    return serviceUser;
  }
}
