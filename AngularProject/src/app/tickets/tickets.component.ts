import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { postObj, seat, ticket } from '../models/tickets'; 
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
  isPosting = false;
  isPosted = false;
  postError = false;

  constructor(private router: ActivatedRoute, private api: ApiService) {
    this.router.params.subscribe(data => {
      this.trainId = data['trId'];
      console.log(this.trainId);
    });
  }

  trainId = 0;
  ticket?: ticket;
  ticketData: ticket[] = [];  
  selectedSeats: Set<string> = new Set<string>(); 
  ticketStorage: seat[] = [];
  postObj: postObj[] = [];

  postTick = {
    trainId: this.trainId,
    date: new Date(),
    email: "string",
    phoneNumber: "",
    people: []
  };

  postTicket() {
    this.isPosting = true;
    this.postError = false;
    
    this.postTick.trainId = this.trainId;
    this.postTick.people = JSON.parse(localStorage.getItem("tktStrg") || "[]");

    this.api.postTickets(this.postTick).subscribe({
      next: (resp) => {
        console.log(resp);
        localStorage.removeItem('tktStrg');
        let tktId = resp.split(":")[1].trim();
        localStorage.setItem("boughtTkt", tktId);
        this.isPosted = true;
        this.isPosting = false;
      },
      error: (err) => {
        console.error('Error posting ticket:', err);
        this.isPosting = false;
        this.postError = true;
      }
    });
  }

  toggleSeat(seatNumber: string | undefined, seat: seat) {
    if (!seatNumber || seat.isOccupied || this.isPosted) return;
    
    if (this.selectedSeats.has(seatNumber)) {
      this.selectedSeats.delete(seatNumber);
      this.ticketStorage = this.ticketStorage.filter(item => item.number !== seatNumber);
    } else {
      this.selectedSeats.add(seatNumber);
      this.ticketStorage.push({
        'seatId': seat.seatId,
        'number': seat.number,
        'price': seat.price,
        'vagonId': seat.vagonId,
        'isOccupied': seat.isOccupied
      });
    }

    localStorage.setItem('tktStrg', JSON.stringify(this.ticketStorage));
  }

  getSeatStyle(seatNumber: string | undefined, isOccupied: boolean | undefined): any {
    if (!seatNumber) return {};
    
    if (isOccupied) {
      return {
        'background-color': '#cccccc', 
        'cursor': 'not-allowed'
      };
    }
    
    return {
      'background-color': this.selectedSeats.has(seatNumber) ? '#4CAF50' : '#f44336',
      'cursor': 'pointer'
    };
  }

  ngOnInit() {
    this.routeSub = this.router.params.subscribe(params => {
      this.ticket = this.ticketData.find(el => el.id == params['id']);
      this.api.getVagon(params['id']).subscribe((resp: any) => {
        this.ticket = resp[0];
        console.log(resp);
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}