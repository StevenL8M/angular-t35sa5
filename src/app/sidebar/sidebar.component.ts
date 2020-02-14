import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../@shared/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    private userService : UserServiceService,
  ) { }

  ngOnInit() {
  }

w3_open() {
  document.getElementById("mySidebar").style.display = "block";
}

w3_close() {
  document.getElementById("mySidebar").style.display = "none";
}

}