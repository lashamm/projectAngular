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
name:string = '';
mail:string = '';
num:string = '';
pass:string = '';
userObj: userObj[] = []


userObj = localStorage.getItem('userObj')



}



// localStorage.getItem('userObj')