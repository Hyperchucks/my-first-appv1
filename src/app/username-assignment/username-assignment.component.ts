import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-assignment',
  templateUrl: './username-assignment.component.html',
  styleUrls: ['./username-assignment.component.css']
})
export class UsernameAssignmentComponent implements OnInit {
    userName = '';
    blankUserName = false;
    userNameStatus = 'Please enter your username!';
   

  constructor() { 

  }

  ngOnInit() {
  }

  updateUserName() {
    this.userNameStatus = 'You have enter this username : ' + this.userName;
  }

  getUserName(event: any) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

}
