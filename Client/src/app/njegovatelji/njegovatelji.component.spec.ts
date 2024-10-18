import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DjelatniciComponent } from './njegovatelji.component';

describe('DjelatniciComponent', () => {
  let component: DjelatniciComponent;
  let fixture: ComponentFixture<DjelatniciComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DjelatniciComponent]
    });
    fixture = TestBed.createComponent(DjelatniciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
