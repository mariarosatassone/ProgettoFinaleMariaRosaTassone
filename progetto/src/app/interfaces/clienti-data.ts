import { Clienti } from "../classes/clienti";

export interface ClientiData {
    content: Array<Clienti>;
    pageable: object;
    last: Boolean;
    totalPages: number;
    totalElements: number;
    number: number;
    numberOfElements: number;
    size: number;
    sort: Object;
    first: Boolean;
    empty: Boolean;
    


}
