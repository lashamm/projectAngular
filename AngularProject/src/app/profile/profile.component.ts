import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterModule } from '@angular/router';
import { userObj } from '../models/user';
import Swal from 'sweetalert2';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  constructor( private auth : SignalService) { }
name = ''
mail = ''
num = ''
pass = ''
cardNum = ''
cardOwner = ''
expData = ''
ccv = ''

userObj : userObj[] = []

click(){
  if(this.name == '' || 
     this.mail == '' ||
      this.num == '' ||
     this.pass == '' ||
  this.cardNum == '' || 
this.cardOwner == '' || 
  this.expData == '' ||
      this.ccv == '' ){
        Swal.fire("შეავსეთ ყველა ველი");
  }
  else{
  this.userObj.push({
    "name": this.name,
    "mail": this.mail,
    'num': this.num,
    'pass': this.pass
  })
  Swal.fire("თქვენ წარმატებით დარეგისტრირდით");
  this.auth.auth()
  console.log(this.userObj)
  localStorage.setItem('userObj',JSON.stringify(this.userObj))
}
}

}
