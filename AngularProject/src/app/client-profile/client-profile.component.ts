import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



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
  this.name = localStorage.getItem(userObj.name);
  this.mail = localStorage.getItem(userObj.mail)
  this.num = localStorage.getItem(userObj.num)
  this.pass = localStorage.getItem(userObj.pass)
}



}



// localStorage.getItem('userObj')