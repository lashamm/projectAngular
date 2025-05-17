import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { ticket } from '../models/tickets';
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

  ngOnInit() {
    this.routeSub = this.router.params.subscribe(params => {
      console.log(params);
      console.log(this.ticket);
      this.ticket = this.ticketData.find(el => el.id == params['id']);
      this.api.getVagon(params['id']).subscribe((resp: any) => {
        console.log(resp);
        this.ticket = resp[0];
      });
    });
  }

  ngOnDestroy() {
    if (this.routeSub) {
      this.routeSub.unsubscribe();
    }
  }
}