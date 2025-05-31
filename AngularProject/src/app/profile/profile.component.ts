import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { userData, userObj } from '../models/user';
import { SignalService } from '../services/signal.service';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor( private auth : SignalService, private api : ApiService) { }
name = ''
mail = ''
num = ''
pass = ''
cardNum = ''
cardOwner = ''
expData = ''
ccv = ''

userObj : userObj[] = []
userData : userData[] = []

click(){
  if(this.name == '' || 
     this.mail == '' ||
      this.num == '' ||
     this.pass == '' ||
  this.cardNum == '' || 
this.cardOwner == '' || 
  this.expData == '' ||
      this.ccv == '' ){
  }
  else{
  this.userObj.push({
    "name": this.name,
    "mail": this.mail,
    'num': this.num,
    'pass': this.pass
  });
    this.api.register(this.num, this.pass, this.mail, this.name);

  this.auth.auth()
  console.log(this.userObj)
  localStorage.setItem('userObj',JSON.stringify(this.userObj))
}
}

}
