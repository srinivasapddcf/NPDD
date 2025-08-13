import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatelevelpurchaseinformationReportComponent } from './statelevelpurchaseinformation-report.component';

describe('StatelevelpurchaseinformationReportComponent', () => {
  let component: StatelevelpurchaseinformationReportComponent;
  let fixture: ComponentFixture<StatelevelpurchaseinformationReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatelevelpurchaseinformationReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatelevelpurchaseinformationReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
