import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StayUpToDateComponent } from './stay-up-to-date.component';

describe('StayUpToDateComponent', () => {
  let component: StayUpToDateComponent;
  let fixture: ComponentFixture<StayUpToDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StayUpToDateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StayUpToDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
