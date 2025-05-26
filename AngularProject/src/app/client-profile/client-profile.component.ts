import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { userObj } from '../models/user';
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-client-profile',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './client-profile.component.html',
  styleUrl: './client-profile.component.scss'
})
export class ClientProfileComponent {

  constructor(private auth : SignalService) { }

  name: string = 'თქვენ არ ხართ დარეგისტრირებული';
  mail: string = '';
  num: string = '';
  pass: string = '';

  ngOnInit() {
    try {
      const userData = JSON.parse(localStorage.getItem("userObj") || "[]");
      if (userData.length > 0) {
        this.name = 'სახელი: ' + userData[0].name || this.name;
        this.mail = 'მეილი: ' + userData[0].mail || this.mail;
        this.pass = 'პაროლი: ' + userData[0].pass || this.pass;
        this.num  = 'ტელეფონი: ' + userData[0].num  || this.num;
      }
    } catch (e) {
      console.error("Error parsing user data:", e);
    }
  }

  fun() {
    localStorage.removeItem('userObj');
    this.auth.deAuth();
    this.name = 'თქვენ არ ხართ დარეგისტრირებული';
  }

}

