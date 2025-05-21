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
user = ''
ngOnInit(){
  const userData = JSON.parse(localStorage.getItem("userObj") || "[]");
if (userData.length > 0) {
        this.user = 'მომხმარებელი: '+userData[0].name;
      }
}
filterBtn(){
  if(this.user == ''){
    alert('ბილეთების შესაძენად თქვენ უნდა იყოთ დარეგისტრირებული!')
  }
  else{
  this.api.filter(this.date, this.from, this.to ).subscribe((resp:any) => {
    console.log(resp)
    this.filter = resp[0]
    if(this.from == this.to ||
       this.from == 'აირჩიე საიდან გინდა წასვლა' && this.to == 'აირჩიე სად გინდა წასვლა' ||
       this.from == 'ფოთი' && this.to == 'ბათუმი' ||
       this.from == 'ბათუმი' && this.to == 'ფოთი'){
      alert('გთხოვთ აირჩიოთ სხვადასხვა დანიშნულება')
    }
    console.log(this.filter.trains)
 })
}
}

}