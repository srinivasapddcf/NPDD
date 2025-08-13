import { ComponentFixture, TestBed } from '@angular/core/testing';

import { poinvoicedetailsreportComponent } from './poinvoicedetailsreport.component';

describe('POINVOICEDETAILSREPORTComponent', () => {
  let component: poinvoicedetailsreportComponent;
  let fixture: ComponentFixture<poinvoicedetailsreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [poinvoicedetailsreportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(poinvoicedetailsreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
