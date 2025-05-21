import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { filterTrain, train } from '../models/trains';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ticket } from '../models/tickets';

@Component({
  selector: 'app-train-id',
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './train-id.component.html',
  styleUrl: './train-id.component.scss'
})
export class TrainIdComponent {
train?: train 
trainData: filterTrain[] = []

constructor(private router: ActivatedRoute, private api: ApiService){
  }

  ngOnInit(){
    this.router.params.subscribe(params => {
      console.log(params);
      console.log(this.train)
      this.train = this.trainData.find(train => train.id == params['id']);
          this.api.getId(params['id']).subscribe((resp:any) => {
    console.log(resp)
    this.train = resp
    })
 })

  }
}
