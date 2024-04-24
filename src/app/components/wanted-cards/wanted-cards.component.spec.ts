import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WantedCardsComponent } from './wanted-cards.component';

describe('WantedCardsComponent', () => {
  let component: WantedCardsComponent;
  let fixture: ComponentFixture<WantedCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WantedCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WantedCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
