import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  user: User;
  constructor(
    private userService : UserServiceService,
  ) { }

  ngOnInit() {
    this.user = this.userService.getUser();
  }



}