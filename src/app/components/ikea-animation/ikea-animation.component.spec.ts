import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IkeaAnimationComponent } from './ikea-animation.component';

describe('IkeaAnimationComponent', () => {
  let component: IkeaAnimationComponent;
  let fixture: ComponentFixture<IkeaAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IkeaAnimationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IkeaAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
