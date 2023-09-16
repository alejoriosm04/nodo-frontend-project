import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSlideshowComponent } from './main-slideshow.component';

describe('MainSlideshowComponent', () => {
  let component: MainSlideshowComponent;
  let fixture: ComponentFixture<MainSlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MainSlideshowComponent]
    });
    fixture = TestBed.createComponent(MainSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
