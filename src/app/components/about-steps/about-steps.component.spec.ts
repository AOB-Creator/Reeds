import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboutStepsComponent } from './about-steps.component';

describe('AboutStepsComponent', () => {
  let component: AboutStepsComponent;
  let fixture: ComponentFixture<AboutStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AboutStepsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboutStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
