import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabSpacesComponent } from './lab-spaces.component';

describe('LabSpacesComponent', () => {
  let component: LabSpacesComponent;
  let fixture: ComponentFixture<LabSpacesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LabSpacesComponent]
    });
    fixture = TestBed.createComponent(LabSpacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
