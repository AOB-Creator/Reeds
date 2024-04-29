import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackedListComponent } from './stacked-list.component';

describe('StackedListComponent', () => {
  let component: StackedListComponent;
  let fixture: ComponentFixture<StackedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackedListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StackedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
