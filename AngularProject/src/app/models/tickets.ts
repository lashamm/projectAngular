export class ticket{
    id!: number;
    trainId?: number;
    trainNumber?: number;
    name?: string;
    seats?: seat[]
}
export class seat{
      seatId?: string;
      number?: string;
      price?: number
      isOccupied?: boolean;
      vagonId?: number;
}