import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubscribeOurLetterComponent } from './subscribe-our-letter.component';

describe('SubscribeOurLetterComponent', () => {
  let component: SubscribeOurLetterComponent;
  let fixture: ComponentFixture<SubscribeOurLetterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubscribeOurLetterComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SubscribeOurLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
