import { Provincia } from "../classes/provincia";

export interface ProvinciaData {
    content: Array<Provincia>;
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
