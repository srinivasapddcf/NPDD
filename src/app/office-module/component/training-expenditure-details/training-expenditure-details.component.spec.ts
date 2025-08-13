import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingExpenditureDetailsComponent } from './training-expenditure-details.component';

describe('TrainingExpenditureDetailsComponent', () => {
  let component: TrainingExpenditureDetailsComponent;
  let fixture: ComponentFixture<TrainingExpenditureDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrainingExpenditureDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainingExpenditureDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
