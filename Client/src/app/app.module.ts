import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NjegovateljComponent } from './njegovatelj/njegovatelj.component';
import { NjegovateljiComponent } from './njegovatelji/njegovatelji.component';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { NavComponent } from './nav/nav.component';
import { KorisnikUpdateComponent } from './korisnik-update/korisnik-update.component';
import { FormsModule } from '@angular/forms';
import { KorisnikCreateComponent } from './korisnik-create/korisnik-create.component';
import { NjegovateljCreateComponent } from './njegovatelj-create/njegovatelj-create.component';

@NgModule({
  declarations: [
    AppComponent,
    NjegovateljComponent,
    NjegovateljiComponent,
    KorisniciComponent,
    KorisnikUpdateComponent,
    NavComponent,
    KorisnikCreateComponent,
    NjegovateljCreateComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-bottom-right'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
