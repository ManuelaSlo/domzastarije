import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjelatnikComponent } from './njegovatelj.component';

describe('DjelatnikComponent', () => {
  let component: DjelatnikComponent;
  let fixture: ComponentFixture<DjelatnikComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjelatnikComponent]
    });
    fixture = TestBed.createComponent(DjelatnikComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
