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




export class filterTrain{
    id!:number;
    source?:string;
    destination?:string;
    date?:string;
    trains?: trains[]
}
export class trains{
    id!: number;
    number?: number;
    name?: string;
    date?:string;
    from?:string;
    to?:string;
    departure?:string;
    arrive?:string;
    departureId?: string;
    vagons?:vagons[];
}
 class vagons{
    id?: number;
    trainId?:number;
    trainNumber?:number;
    name?: string;
    seats?:seats[]
 }

 class seats{
    seatId?:string; 
    number?:string
    price?: number
    isOccupied?: boolean;
    vagonId?: number;
 }
