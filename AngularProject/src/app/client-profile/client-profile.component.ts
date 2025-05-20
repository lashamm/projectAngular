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
  name: string = 'თქვენ არ ხართ დარეგისტრირებული';
  mail: string = 'თქვენ არ ხართ დარეგისტრირებული';
  num: string = 'თქვენ არ ხართ დარეგისტრირებული';
  pass: string = 'თქვენ არ ხართ დარეგისტრირებული';

  ngOnInit() {
    try {
      const userData = JSON.parse(localStorage.getItem("userObj") || "[]");
      if (userData.length > 0) {
        this.name = userData[0].name || this.name;
        this.mail = userData[0].mail || this.mail;
        this.pass = userData[0].pass || this.pass;
        this.num = userData[0].num || this.num;
      }
    } catch (e) {
      console.error("Error parsing user data:", e);
    }
  }

  fun() {
    localStorage.removeItem('userObj');
    this.name = 'თქვენ არ ხართ დარეგისტრირებული';
    this.mail = 'თქვენ არ ხართ დარეგისტრირებული';
    this.num = 'თქვენ არ ხართ დარეგისტრირებული';
    this.pass = 'თქვენ არ ხართ დარეგისტრირებული';
  }
}

