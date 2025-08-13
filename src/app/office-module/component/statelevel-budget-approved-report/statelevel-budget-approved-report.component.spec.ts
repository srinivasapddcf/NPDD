import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelevelBudgetApprovedReportComponent } from './statelevel-budget-approved-report.component';

describe('StatelevelBudgetApprovedReportComponent', () => {
  let component: StatelevelBudgetApprovedReportComponent;
  let fixture: ComponentFixture<StatelevelBudgetApprovedReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelevelBudgetApprovedReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelevelBudgetApprovedReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
