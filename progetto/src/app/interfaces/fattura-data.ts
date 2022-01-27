import { Fatture } from "../classes/fatture";

export interface FatturaData {
    content: Array<Fatture>;
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
