import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmcupurchaseReportComponent } from './bmcupurchase-report.component';

describe('BmcupurchaseReportComponent', () => {
  let component: BmcupurchaseReportComponent;
  let fixture: ComponentFixture<BmcupurchaseReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BmcupurchaseReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmcupurchaseReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
