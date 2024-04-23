import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerApthwayComponent } from './career-apthway.component';

describe('CareerApthwayComponent', () => {
  let component: CareerApthwayComponent;
  let fixture: ComponentFixture<CareerApthwayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CareerApthwayComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CareerApthwayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
