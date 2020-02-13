import { Component, Input } from '@angular/core';
import { AuthService } from '../@shared/auth.service'

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
   constructor(
    public pseudo:string
  ) {  }  
}