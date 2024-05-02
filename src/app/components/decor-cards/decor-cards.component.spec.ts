import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecorCardsComponent } from './decor-cards.component';

describe('DecorCardsComponent', () => {
  let component: DecorCardsComponent;
  let fixture: ComponentFixture<DecorCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecorCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecorCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
