import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlitaCardsComponent } from './plita-cards.component';

describe('PlitaCardsComponent', () => {
  let component: PlitaCardsComponent;
  let fixture: ComponentFixture<PlitaCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PlitaCardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PlitaCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
