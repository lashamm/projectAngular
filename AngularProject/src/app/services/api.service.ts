import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  getAll(){
    return this.http.get('https://railway.stepprojects.ge/api/trains')
  }
  getId( id : number){
    return this.http.get(`https://railway.stepprojects.ge/api/trains/${id}`)
  }

  filter( date : string, from : string, to: string){
     return this.http.get(`https://railway.stepprojects.ge/api/getdeparture?from=${from}&to=${to}&date=${date}`)
  }
  getVagon( id : number){
    return this.http.get(`https://railway.stepprojects.ge/api/getvagon/${id}`)
  }
  // postTickets(seatId:string){
  //   return this.http.get(`https://railway.stepprojects.ge/api/tickets/register${seatId}`)
  // }
}
