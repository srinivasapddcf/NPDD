import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExpenditureReportComponent } from './training-expenditure-report.component';

describe('TrainingExpenditureReportComponent', () => {
  let component: TrainingExpenditureReportComponent;
  let fixture: ComponentFixture<TrainingExpenditureReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingExpenditureReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingExpenditureReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
