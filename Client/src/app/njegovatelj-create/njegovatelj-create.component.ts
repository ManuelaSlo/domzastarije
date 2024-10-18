import { Component } from '@angular/core';
import { NjegovateljiService } from '../_services/njegovatelji.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-njegovatelj-create',
  templateUrl: './njegovatelj-create.component.html',
  styleUrls: ['./njegovatelj-create.component.css']
})
export class NjegovateljCreateComponent {

  njegovatelj = {
    id: '',
    ime: '',
    prezime: '',
    oib: ''
  }

  constructor(private njegovateljiService: NjegovateljiService, private toastr: ToastrService){}

  ngOnInit(): void {
    
  }



  spremiNjegovatelja(){

    this.njegovateljiService.spremiNovogNjegovatelja(this.njegovatelj).subscribe({
      next: response => {
          console.log(response);
          this.toastr.success("Njegovatelj spremljen");
      },
      error: error => {
        console.error(error);
        this.toastr.error("Dogodila se greška");
      }
    });
  }

}
