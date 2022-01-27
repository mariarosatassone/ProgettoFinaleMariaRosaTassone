import { Clienti } from "../classes/clienti";
import { Comune } from "../classes/comune";

export interface ComuneData {

    content: Array<Comune>;
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
