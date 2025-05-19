// import { CommonModule } from '@angular/common';
// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { FormsModule } from '@angular/forms';
// import { ActivatedRoute, RouterModule } from '@angular/router';
// import { ticket } from '../models/tickets';
// import { ApiService } from '../services/api.service';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-tickets',
//   standalone: true, 
//   imports: [CommonModule, FormsModule, RouterModule],
//   templateUrl: './tickets.component.html',
//   styleUrl: './tickets.component.scss'
// })
// export class TicketsComponent implements OnInit, OnDestroy {
//   private routeSub?: Subscription;

//   constructor(private router: ActivatedRoute, private api: ApiService) {}

//   ticket?: ticket;
//   ticketData: ticket[] = [];  
//   btnStyle = 'background-color: red;'

  

//   fun(){
//     if(this.btnStyle == 'background-color: red;'){
//       this.btnStyle = 'background-color: green;'
//     }
//     else if(this.btnStyle == 'background-color: green;'){
//       this.btnStyle = 'background-color: red;'
//     }
//     else{
//       alert('error')
//     }
//   }

//   ngOnInit() {
//     this.routeSub = this.router.params.subscribe(params => {
//       console.log(params);
//       console.log(this.ticket);
//       this.ticket = this.ticketData.find(el => el.id == params['id']);
//       this.api.getVagon(params['id']).subscribe((resp: any) => {
//         console.log(resp);
//         this.ticket = resp[0];
//       });
//     });
//   }

//   ngOnDestroy() {
//     if (this.routeSub) {
//       this.routeSub.unsubscribe();
//     }
//   }
// }

import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { seat, ticket } from '../models/tickets'; 
import { ApiService } from '../services/api.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tickets',
  standalone: true, 
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.scss'
})
export class TicketsComponent implements OnInit, OnDestroy {
  private routeSub?: Subscription;

  constructor(private router: ActivatedRoute, private api: ApiService) {}

  ticket?: ticket;
  ticketData: ticket[] = [];  
  selectedSeats: Set<string> = new Set<string>(); 
  ticketStorage : seat[] = []

number = ''
price = 0
seatId = ''
vagonId= 0

  toggleSeat(seatNumber: string | undefined, seat: seat) {
  if (!seatNumber) return;
  
  if (this.selectedSeats.has(seatNumber)) {
    this.selectedSeats.delete(seatNumber);
    
    this.ticketStorage = this.ticketStorage.filter(item => item.number !== seatNumber);
  } else {
    this.selectedSeats.add(seatNumber);
    
    this.ticketStorage.push({
      'seatId': seat.seatId,
      'number': seat.number,
      'price': seat.price,
      'vagonId': seat.vagonId
    });
  }

  console.log(this.ticketStorage);
  localStorage.setItem('tktStrg', JSON.stringify(this.ticketStorage));
}

  getSeatStyle(seatNumber: string | undefined): any {
    if (!seatNumber) return {};

    return {
      'background-color': this.selectedSeats.has(seatNumber) ? 'green' : 'red'
    };
  }

  ngOnInit() {
    this.routeSub = this.router.params.subscribe(params => {
      this.ticket = this.ticketData.find(el => el.id == params['id']);
      this.api.getVagon(params['id']).subscribe((resp: any) => {
        this.ticket = resp[0];
        console.log(resp)
      });
    });
  }


  fun(){
  }
  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}