import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { filterTrain, train } from '../models/trains';
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

  constructor(private api : ApiService){
    
  }
filter : filterTrain = new filterTrain
from = ''
to= ''
date = ''

filterBtn(){
  this.api.filter(this.date, this.from, this.to ).subscribe((resp:any) => {
    console.log(resp)
    this.filter = resp[0]
    console.log(this.filter.trains)
 })
}



//   ngOnInit(){
//     this.api.getAll().subscribe((resp:any) => {
//       console.log(resp)
//       this.trains = resp
//     })
//   }


//   filter(){
    
// }



}