import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HoteliComponent } from './korisnici.component';

describe('HoteliComponent', () => {
  let component: HoteliComponent;
  let fixture: ComponentFixture<HoteliComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoteliComponent]
    });
    fixture = TestBed.createComponent(HoteliComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
