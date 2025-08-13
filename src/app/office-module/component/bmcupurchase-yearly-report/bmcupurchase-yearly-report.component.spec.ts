import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BMCUPurchaseYearlyReportComponent } from './bmcupurchase-yearly-report.component';

describe('BMCUPurchaseYearlyReportComponent', () => {
  let component: BMCUPurchaseYearlyReportComponent;
  let fixture: ComponentFixture<BMCUPurchaseYearlyReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BMCUPurchaseYearlyReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BMCUPurchaseYearlyReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
