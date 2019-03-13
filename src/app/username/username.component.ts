import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username',
  templateUrl: './username.component.html',
  styleUrls: ['./username.component.css']
})
export class UsernameComponent implements OnInit {

  status = "";
  userName = "Luis Fernando";

  constructor() { }

  ngOnInit() {
  }

  resetUsername(){
    // Using if just passing a variable will check if it exists and if it is NOT null or true (in case of a boolean variable).
    if(this.userName){
      // If userName exists, replace the string with a blank string.
      this.userName = "";
      this.status = "Username was reseted!";
    }else{
      // If userName is Null (or blank) throw the error message
      this.status = "Sorry, I can't reset the UserName if it does not exist.";
    }
  }

}
