import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KorisniciService } from '../_services/korisnici.service';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from '../_modeli/korisnik';
import { Njegovatelj } from '../_modeli/njegovatelj';
import { NjegovateljiService } from '../_services/njegovatelji.service';

@Component({
  selector: 'app-korisnik-update',
  templateUrl: './korisnik-update.component.html',
  styleUrls: ['./korisnik-update.component.css']
})
export class KorisnikUpdateComponent implements OnInit{

  korisnik: any = {
    id: 0,
    ime: '',
    prezime: '',
    oib: '',
    datumRodenja: '',
    njegovateljId: ''
  }

  njegovatelji: Njegovatelj[] = [];


  korisnikID: string = "";

  constructor(
    private route: ActivatedRoute, 
    private korisniciService: KorisniciService,
    private njegovateljiService: NjegovateljiService,
     private toastr: ToastrService,
    ){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.korisnikID = params['id'];
      this.dohvatiKorisnikaPoId();
      this.dohvatiNjegovatelje();
    });
  }

  dohvatiKorisnikaPoId(){
    this.korisniciService.dohvatiKorisnikaPoId(this.korisnikID).subscribe({
      next: response => {
        console.log("Response", response);

        this.korisnik = {
          id: response.id,
          ime: response.ime,
          prezime: response.prezime,
          oib: response.oib,
          //datumRodenja: this.formatDatumRodenja(response.datumRodenja),
          datumRodenja: response.datumRodenja.split("T")[0],
          njegovateljId: response.njegovatelj.id
        }

        console.log("Korisnik data", this.korisnik);
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    }
    )
  }

  spremiKorisnika(){
    console.log(this.korisnik);
    // const updateModel = {...this.korisnik};

    this.korisniciService.azurirajKorisnika(this.korisnik).subscribe({
      next: response => {
        console.log(response);
        this.toastr.success("Spremljeni podaci korisnika.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška.");
      }
    })

   /* delete updateModel.djelatnici;
    console.log(updateModel);
    this.hotelService.azurirajHotel(updateModel).subscribe({
      next: response => {
        this.dohvatiHotelPoId();
        console.log(response);
        this.toastr.success("Spremljeni podaci hotela.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška.");
      }
    });*/

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

  private formatDatumRodenja(datumRodenja: string){
    const dateStr = datumRodenja;
    const dateObj = new Date(dateStr);

    const day = String(dateObj.getDate()).padStart(2, '0'); // Get the day and pad with zero if needed
    const month = String(dateObj.getMonth() + 1).padStart(2, '0'); // Get the month (January is 0)
    const year = dateObj.getFullYear(); // Get the full year

    const formattedDate = `${day}/${month}/${year}`;

    return formattedDate;
  }

}
