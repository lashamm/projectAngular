import { from } from "rxjs";

export class train {
    id!:number;
    number?:number;
    name?:string;
    date?:string;
    from?:string;
    to?:string;
    departure?:string;
    arrive?:string;
    departureId?:departureId[]
}

class departureId {
    id?:number;
    trainId?:number;
    name?:string;
    seats?:null
}