import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicesapproveddetailsreportComponent } from './invoicesapproveddetailsreport.component';

describe('InvoicesapproveddetailsreportComponent', () => {
  let component: InvoicesapproveddetailsreportComponent;
  let fixture: ComponentFixture<InvoicesapproveddetailsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicesapproveddetailsreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicesapproveddetailsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
