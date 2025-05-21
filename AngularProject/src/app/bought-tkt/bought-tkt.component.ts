import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-bought-tkt',
  imports: [RouterModule, CommonModule, FormsModule],
  templateUrl: './bought-tkt.component.html',
  styleUrl: './bought-tkt.component.scss'
})
export class BoughtTktComponent {
 constructor(private api : ApiService, private router : ActivatedRoute){
  }

seatId: string | null = 'თქვენ არ გაქვთ შეძენილი ბილეთები'

ngOnInit(){
  console.log(this.seatId)
  if(this.seatId = localStorage.getItem('boughtTkt')){
    this.seatId = 'თქვენი ბილეთის ID არის: '+localStorage.getItem('boughtTkt')+" დააჭირეთ თუ გინდათ გაუქმება"
  }
  else(
    this.seatId = 'თქვენ არ გაქვთ შეძენილი ბილეთები'
  )
}

  delete(){
    const tktId = localStorage.getItem('boughtTkt')
    this.seatId = 'თქვენ წაშალეთ ბილეთები'
    this.api.deleteTick(tktId).subscribe(resp => {
    console.log(resp)
    localStorage.removeItem("boughtTkt")
    })
  }

}
