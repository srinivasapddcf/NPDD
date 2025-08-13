import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMCUPurchaseStatusReportComponent } from './bmcupurchase-status-report.component';

describe('BMCUPurchaseStatusReportComponent', () => {
  let component: BMCUPurchaseStatusReportComponent;
  let fixture: ComponentFixture<BMCUPurchaseStatusReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMCUPurchaseStatusReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMCUPurchaseStatusReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
