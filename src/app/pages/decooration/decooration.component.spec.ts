import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecoorationComponent } from './decooration.component';

describe('DecoorationComponent', () => {
  let component: DecoorationComponent;
  let fixture: ComponentFixture<DecoorationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DecoorationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DecoorationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
