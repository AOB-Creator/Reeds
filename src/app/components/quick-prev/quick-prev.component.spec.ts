import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickPrevComponent } from './quick-prev.component';

describe('QuickPrevComponent', () => {
  let component: QuickPrevComponent;
  let fixture: ComponentFixture<QuickPrevComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuickPrevComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuickPrevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
