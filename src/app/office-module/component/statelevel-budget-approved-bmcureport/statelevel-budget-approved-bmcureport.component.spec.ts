import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelevelBudgetApprovedBMCUReportComponent } from './statelevel-budget-approved-bmcureport.component';

describe('StatelevelBudgetApprovedBMCUReportComponent', () => {
  let component: StatelevelBudgetApprovedBMCUReportComponent;
  let fixture: ComponentFixture<StatelevelBudgetApprovedBMCUReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelevelBudgetApprovedBMCUReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelevelBudgetApprovedBMCUReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
