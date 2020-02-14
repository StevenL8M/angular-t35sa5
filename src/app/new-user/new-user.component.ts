import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserServiceService } from '../@shared/user-service.service';
import { User } from '../models/user';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {

  userForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private userService:UserServiceService) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.userForm = this.formBuilder.group({
      pseudo:''
    });
  }

  onSubmitForm() {
    const pseudo = this.userForm.value['pseudo'];
    console.log("pseudo > ", pseudo)
    this.userService.setUser(pseudo);
  }

}