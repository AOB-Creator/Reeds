import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DesignedInfoComponent } from './designed-info.component';

describe('DesignedInfoComponent', () => {
  let component: DesignedInfoComponent;
  let fixture: ComponentFixture<DesignedInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DesignedInfoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DesignedInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
