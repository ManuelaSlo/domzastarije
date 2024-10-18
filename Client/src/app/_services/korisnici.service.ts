import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class KorisniciService {

  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSveKorisnike(){
    return this.http.get<any>(this.baseUrl + 'korisnik');
  }

  dohvatiKorisnikaPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'korisnik/' + id);
  }

  spremiNovogKorisnika(model: any){
    console.log("SPREMI KORISNIKA U SERVISU");
    // defaultaj vrijeme jer nam ne treba, datum nam je bitan
    model.datumRodenja = model.datumRodenja + "T00:00:00.000";
    return this.http.post(this.baseUrl + 'korisnik', model);
  }

  obrisiKorisnika(id: number){
    return this.http.delete(this.baseUrl + 'korisnik/'+id);
  }

  azurirajKorisnika(model: any){
    console.log("Ažuriraj korisnika!");
    return this.http.put(this.baseUrl + 'korisnik/'+ model.id, model);
  }
}
