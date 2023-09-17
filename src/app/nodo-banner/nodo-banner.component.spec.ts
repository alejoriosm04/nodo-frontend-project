import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodoBannerComponent } from './nodo-banner.component';

describe('NodoBannerComponent', () => {
  let component: NodoBannerComponent;
  let fixture: ComponentFixture<NodoBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NodoBannerComponent]
    });
    fixture = TestBed.createComponent(NodoBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
