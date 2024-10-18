import { Component, OnInit } from '@angular/core';
import { KorisniciService } from '../_services/korisnici.service';
import { ToastrService } from 'ngx-toastr';
import { Korisnik } from '../_modeli/korisnik';

@Component({
  selector: 'app-korisnici',
  templateUrl: './korisnici.component.html',
  styleUrls: ['./korisnici.component.css']
})
export class KorisniciComponent implements OnInit{

  korisnici: Korisnik[] = [];

  constructor(private korisniciService: KorisniciService, private toastr: ToastrService){}

  ngOnInit(): void {
    console.log("init");
    this.dohvatiKorisnike();
  }

  dohvatiKorisnike(){
    this.korisniciService.dohvatiSveKorisnike().subscribe({
      next: response => {
       
        let korisniciData = response["$values"];
      
        console.log("Data");
        console.log(korisniciData);
      
        korisniciData.forEach((korisnikItem: any) => {
          const korisnik: Korisnik = {
            id: korisnikItem.id,
            ime: korisnikItem.ime,
            prezime: korisnikItem.prezime,
            oib: korisnikItem.oib,
            datumRodenja: this.formatDatumRodenja(korisnikItem.datumRodenja),
            njegovatelj: korisnikItem.njegovatelj
          }

          this.korisnici.push(korisnik);
          console.log("korisnici", this.korisnici);
        });
      },
      error: error => {
        console.error(error);
      }
    });
  }

  obrisiKorisnika(korisnik: any){
    console.log("Obriši korisnika sa id: " + korisnik.id);
    this.korisniciService.obrisiKorisnika(korisnik.id).subscribe({
      next: response => {
        console.log(response);
        const index = this.korisnici.indexOf(korisnik);
        this.korisnici.splice(index, 1);
        this.toastr.success("Korisnik obrisan");
      },
      error: error => {
        this.toastr.error("Dogodila se greška");
      }
    })
  }

  private formatDatumRodenja(datumRodenja: string){
    // Create a Date object
    const date = new Date(datumRodenja);

    // Extract day, month, and year
    const day = date.getUTCDate();
    const month = date.getUTCMonth() + 1; // Months are zero-indexed
    const year = date.getUTCFullYear();

    // Ensure day and month are always two digits
    const formattedDay = day.toString().padStart(2, '0');
    const formattedMonth = month.toString().padStart(2, '0');

    // Create the final formatted string
    const formattedDate = `${formattedDay}.${formattedMonth}.${year}`;

    return formattedDate;
  }

}
