import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PorductsOverviewComponent } from './porducts-overview.component';

describe('PorductsOverviewComponent', () => {
  let component: PorductsOverviewComponent;
  let fixture: ComponentFixture<PorductsOverviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PorductsOverviewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PorductsOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
