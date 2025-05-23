import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-mobile-nav',
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {

  @Output() show = new EventEmitter<boolean>();

   hide(){
    this.show.emit(false)
   }

}
