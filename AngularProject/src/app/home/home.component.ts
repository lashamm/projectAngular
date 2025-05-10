import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { train } from '../models/trains';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [FormsModule, CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor(private api : ApiService){}
trains : train [] = []
  ngOnInit(){
    this.api.getAll().subscribe((resp:any) => {
      console.log(resp)
      this.trains = resp
    })
  }


  filter(){
    
}



}