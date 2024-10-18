import { Njegovatelj } from "./njegovatelj";

export interface Korisnik{
    id: number;
    ime: string;
    prezime: string;
    oib: string;
    datumRodenja: string;
    njegovatelj?: Njegovatelj;
}