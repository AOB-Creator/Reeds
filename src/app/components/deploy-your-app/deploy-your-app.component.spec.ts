import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeployYourAppComponent } from './deploy-your-app.component';

describe('DeployYourAppComponent', () => {
  let component: DeployYourAppComponent;
  let fixture: ComponentFixture<DeployYourAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeployYourAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeployYourAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
