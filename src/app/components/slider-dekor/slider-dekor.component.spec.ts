import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderDekorComponent } from './slider-dekor.component';

describe('SliderDekorComponent', () => {
  let component: SliderDekorComponent;
  let fixture: ComponentFixture<SliderDekorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SliderDekorComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderDekorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
