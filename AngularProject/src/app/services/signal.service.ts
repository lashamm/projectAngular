import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  constructor() { }

  isAuthenticated = signal(false);

  auth(){
    this.isAuthenticated.set(true)
  }
  deAuth(){
    this.isAuthenticated.set(false)
  }
}
