import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSectionsComponent } from './header-sections.component';

describe('HeaderSectionsComponent', () => {
  let component: HeaderSectionsComponent;
  let fixture: ComponentFixture<HeaderSectionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeaderSectionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeaderSectionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
