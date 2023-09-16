import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlliesSlideshowComponent } from './allies-slideshow.component';

describe('AlliesSlideshowComponent', () => {
  let component: AlliesSlideshowComponent;
  let fixture: ComponentFixture<AlliesSlideshowComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlliesSlideshowComponent]
    });
    fixture = TestBed.createComponent(AlliesSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
