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
  postTickets(seat:any){
    return this.http.post(`https://railway.stepprojects.ge/api/tickets/register`, seat, {responseType: 'text'} )
  }
  deleteTick(ticketId : any){
   return this.http.delete(`https://railway.stepprojects.ge/api/tickets/cancel/${ticketId}`,  {responseType: 'text'})
  }

}
