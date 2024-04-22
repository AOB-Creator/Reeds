import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandingCompaniesComponent } from './branding-companies.component';

describe('BrandingCompaniesComponent', () => {
  let component: BrandingCompaniesComponent;
  let fixture: ComponentFixture<BrandingCompaniesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BrandingCompaniesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrandingCompaniesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
