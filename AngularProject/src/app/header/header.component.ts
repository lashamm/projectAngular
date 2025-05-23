import { Component, effect } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { ButtonComponent } from "../button/button.component";
import { CommonModule } from '@angular/common';
import { MobileNavComponent } from "../mobile-nav/mobile-nav.component";
import { SignalService } from '../services/signal.service';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule, MobileNavComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
constructor(private router: Router, private auth : SignalService) {
 
  effect(() => {
     this.isAuht = this.auth.isAuthenticated()
  })
}
isAuht = false
show = false
route =""


  togleBurger(){
    this.show = !this.show
    // this.show ? this.router.navigateByUrl('/mobile-nav') : this.router.navigateByUrl('/home')

  }

  hideBurger(event : boolean){
    this.show = event
  }

}
