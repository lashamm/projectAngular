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
num:string | null = '';
pass:string | null = '';



ngOnInit(){
  // if(localStorage.getItem("userObj")!=null){
  // console.log(JSON.parse(localStorage.getItem("userObj")[0]))
  // }

  // this.name = JSON.parse().name;
  // this.mail = localStorage.getItem(JSON.parse(userObj.mail));
  // this.num = localStorage.getItem(JSON.parse(userObj.num));
  // this.pass = localStorage.getItem(JSON.parse(userObj.pass))
}



}



// localStorage.getItem('userObj')