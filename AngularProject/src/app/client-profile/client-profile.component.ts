import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userObj } from '../models/user';



@Component({
  selector: 'app-client-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.scss'
})
export class ClientProfileComponent {
name:string | null = '';
mail:string | null = '';
num:string  | null = '';
pass:string | null = '';

ngOnInit(){
  console.log(JSON.parse(localStorage.getItem("userObj") || "") [0])
  console.log(JSON.parse(localStorage.getItem("userObj") || "") [0].name)
  this.name = JSON.parse(localStorage.getItem("userObj") || "") [0].name;
  this.mail = JSON.parse(localStorage.getItem("userObj") || "") [0].mail;
  this.num  = JSON.parse(localStorage.getItem("userObj") || "") [0].num;
  this.pass = JSON.parse(localStorage.getItem("userObj") || "") [0].pass;
}
fun(){
  localStorage.removeItem('userObj'); 
} 
}

