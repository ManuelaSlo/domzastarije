import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KorisniciComponent } from './korisnici/korisnici.component';
import { NjegovateljiComponent } from './njegovatelji/njegovatelji.component';
import { NjegovateljComponent } from './njegovatelj/njegovatelj.component';
import { KorisnikUpdateComponent } from './korisnik-update/korisnik-update.component';
import { KorisnikCreateComponent } from './korisnik-create/korisnik-create.component';
import { NjegovateljCreateComponent } from './njegovatelj-create/njegovatelj-create.component';

const routes: Routes = [
  {path: '', component: NjegovateljiComponent},
  {path: 'njegovatelji', component: NjegovateljiComponent},
  {path: 'njegovatelj/:id', component: NjegovateljComponent},
  {path: 'njegovatelj-create', component: NjegovateljCreateComponent},
  {path: 'korisnici', component: KorisniciComponent},
  {path: 'korisnik-update/:id', component: KorisnikUpdateComponent},
  {path: 'korisnik-create', component: KorisnikCreateComponent},
  {path: '**', component: NjegovateljiComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
