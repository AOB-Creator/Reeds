import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsAboutUsComponent } from './news-about-us.component';

describe('NewsAboutUsComponent', () => {
  let component: NewsAboutUsComponent;
  let fixture: ComponentFixture<NewsAboutUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewsAboutUsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NewsAboutUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
