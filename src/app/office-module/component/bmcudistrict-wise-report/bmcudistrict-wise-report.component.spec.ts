import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMCUDistrictWiseReportComponent } from './bmcudistrict-wise-report.component';

describe('BMCUDistrictWiseReportComponent', () => {
  let component: BMCUDistrictWiseReportComponent;
  let fixture: ComponentFixture<BMCUDistrictWiseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMCUDistrictWiseReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMCUDistrictWiseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
