import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimatedcardsComponent } from './animatedcards.component';

describe('AnimatedcardsComponent', () => {
  let component: AnimatedcardsComponent;
  let fixture: ComponentFixture<AnimatedcardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnimatedcardsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnimatedcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
