import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NjegovateljiService } from '../_services/njegovatelji.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-njegovatelj',
  templateUrl: './njegovatelj.component.html',
  styleUrls: ['./njegovatelj.component.css']
})
export class NjegovateljComponent implements OnInit {

  njegovateljID: string = '';
  njegovatelj = {
    id: '',
    ime: '',
    prezime: '',
    oib: ''
  }

  constructor(private route: ActivatedRoute, private njegovateljiService: NjegovateljiService, private toastr: ToastrService){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.njegovateljID = params['id'];
      this.dohvatiNjegovateljaPoId();
      

    });
  }

  dohvatiNjegovateljaPoId(){
    this.njegovatelj = {
      id: '',
      ime: '',
      prezime: '',
      oib: ''
    }
    this.njegovateljiService.dohvatiNjegovateljaPoId(this.njegovateljID).subscribe({
      next: response => {
        console.log(response);
        this.njegovatelj = {
          id: response.id,
          ime: response.ime,
          prezime: response.prezime,
          oib: response.oib
        }
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

  urediNjegovatelja(){
    this.njegovatelj.id = this.njegovateljID;

    this.njegovateljiService.azurirajNjegovatelja(this.njegovatelj).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Spremljeni podaci njegovatelja.");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }


}
