import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelevelBudgetDetailsReportComponent } from './statelevel-budget-details-report.component';

describe('StatelevelBudgetDetailsReportComponent', () => {
  let component: StatelevelBudgetDetailsReportComponent;
  let fixture: ComponentFixture<StatelevelBudgetDetailsReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelevelBudgetDetailsReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelevelBudgetDetailsReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
