import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import {User} from '../models/user/user.component';

@Component({
  selector: 'app-boite',
  templateUrl: './boite.component.html',
  styleUrls: ['./boite.component.css']
})
export class BoiteComponent implements OnInit {
  
  constructor( private userService: UserServiceService) { }

  ngOnInit() {
    console.log(this.userService.getUser());
  }

}