import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userObj } from '../models/user';

@Component({
  selector: 'app-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
name = ''
mail = ''
num = ''
pass = ''

userObj : userObj[] = []

click(){
  this.userObj.push({
    "name": this.name,
    "mail": this.mail,
    'num': this.num,
    'pass': this.pass
  })
  console.log(this.userObj)
  localStorage.setItem('userObj',JSON.stringify(this.userObj))
}

}
