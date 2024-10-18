import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NjegovateljiService {
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  dohvatiSveNegovatelje(){
    return this.http.get<any>(this.baseUrl + 'njegovatelj');
  }
  
  dohvatiNjegovateljaPoId(id: any){
    return this.http.get<any>(this.baseUrl + 'njegovatelj/' + id);
  }

  spremiNovogNjegovatelja(model: any){
    return this.http.post(this.baseUrl + 'njegovatelj', model);
  }

  obrisiNjegovatelja(id: number){
    return this.http.delete(this.baseUrl + 'njegovatelj/'+id);
  }

  azurirajNjegovatelja(model: any){
    return this.http.put(this.baseUrl + 'njegovatelj/'+ model.id, model);
  }
}
