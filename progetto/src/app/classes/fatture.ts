import { Clienti } from "./clienti";
import { Stato } from "./stato";

export class Fatture {
    id!:number;
    data!: number;
    numero!: number;
    anno!: number;
    importo!: number;
    stato!: Stato;
    clienti!: Clienti;


    constructor() {
        this.stato = new Stato();
        this.clienti = new Clienti();
    }


  
}
