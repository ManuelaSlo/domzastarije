import { Component } from '@angular/core';
import { KorisniciService } from '../_services/korisnici.service';
import { ToastrService } from 'ngx-toastr';
import { NjegovateljiService } from '../_services/njegovatelji.service';
import { Njegovatelj } from '../_modeli/njegovatelj';

@Component({
  selector: 'app-korisnik-create',
  templateUrl: './korisnik-create.component.html',
  styleUrls: ['./korisnik-create.component.css']
})
export class KorisnikCreateComponent {

  korisnik: any = {
    id: 0,
    ime: '',
    prezime: '',
    oib: '',
    datumRodenja: '',
    njegovateljId: ''
  }

  njegovatelji: Njegovatelj[] = [];

  constructor(
    private korisniciService: KorisniciService,
    private njegovateljiService: NjegovateljiService,
    private toastr: ToastrService,
  ){}

  ngOnInit(){
    this.dohvatiNjegovatelje();
  }

  dohvatiNjegovatelje(){
    this.njegovateljiService.dohvatiSveNegovatelje().subscribe({
      next: success => {
        console.log(success);
        const njegovateljiData = success["$values"];

        njegovateljiData.forEach((njegovateljItem: any) => {
          const njegovatelj: Njegovatelj = {
            id: njegovateljItem.id,
            ime: njegovateljItem.ime,
            prezime: njegovateljItem.prezime,
            oib: njegovateljItem.oib
          }

          this.njegovatelji.push(njegovatelj);
          console.log("njegovatelji", this.njegovatelji);
        });
      },
      error: error => {
        console.error(error);
      }
    })
  }

  spremiKorisnika(){
    console.log("Spremi korisnika");
    console.log("Korisnik za spremiti", this.korisnik);

    this.korisniciService.spremiNovogKorisnika(this.korisnik).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Korisnik spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
