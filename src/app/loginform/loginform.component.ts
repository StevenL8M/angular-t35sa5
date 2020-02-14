import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent implements OnInit {
  user: User

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
  }

  onSubmit(){
    
  }

}