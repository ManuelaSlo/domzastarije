import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NjegovateljCreateComponent } from './njegovatelj-create.component';

describe('NjegovateljCreateComponent', () => {
  let component: NjegovateljCreateComponent;
  let fixture: ComponentFixture<NjegovateljCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NjegovateljCreateComponent]
    });
    fixture = TestBed.createComponent(NjegovateljCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
