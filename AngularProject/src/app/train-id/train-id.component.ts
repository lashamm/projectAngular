import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { ActivatedRoute } from '@angular/router';
import { train } from '../models/trains';

@Component({
  selector: 'app-train-id',
  imports: [],
  templateUrl: './train-id.component.html',
  styleUrl: './train-id.component.scss'
})
export class TrainIdComponent {

  constructor(private api : ApiService, private route : ActivatedRoute){
    this.route.params.subscribe(id => {
      console.log('id')
      this.trainId = id['id']
    })
  }
  trainId = 0
  singleTrains : train = new train
  ngOnInit(){
    this.api.getId(this.trainId).subscribe(resp => {
      console.log(resp)
    })
  }
}
