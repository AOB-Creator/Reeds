import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeetOurLeadersComponent } from './meet-our-leaders.component';

describe('MeetOurLeadersComponent', () => {
  let component: MeetOurLeadersComponent;
  let fixture: ComponentFixture<MeetOurLeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MeetOurLeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MeetOurLeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
