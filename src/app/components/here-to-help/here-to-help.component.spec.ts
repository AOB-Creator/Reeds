import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HereToHelpComponent } from './here-to-help.component';

describe('HereToHelpComponent', () => {
  let component: HereToHelpComponent;
  let fixture: ComponentFixture<HereToHelpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HereToHelpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HereToHelpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
