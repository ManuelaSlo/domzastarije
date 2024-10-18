import { Component, OnInit } from '@angular/core';
import { NjegovateljiService } from '../_services/njegovatelji.service';
import { Njegovatelj } from '../_modeli/njegovatelj';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from '../_modeli/korisnik';
import { KorisniciService } from '../_services/korisnici.service';

@Component({
  selector: 'app-njegovatelji',
  templateUrl: './njegovatelji.component.html',
  styleUrls: ['./njegovatelji.component.css']
})
export class NjegovateljiComponent implements OnInit{

  njegovatelji: Njegovatelj[] = [];

  constructor(private njegovateljiService: NjegovateljiService, private toastrService: ToastrService
  ){}

  ngOnInit(): void {
    this.dohvatiNegovatelje();
 //   this.dohvatiDjelatnike();
  }

  dohvatiNegovatelje(){
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


  obrisiNjegovatelja(id: number){
    this.njegovateljiService.obrisiNjegovatelja(id).subscribe({
      next: success => {
        this.toastrService.success("Njegovatelj obrisan");
        this.dohvatiNegovatelje();
      },
      error: error => {
        console.error(error);
        this.toastrService.error("Dogodila se greška");
      }
    })
  }

 
}
