import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicemappingbmcustatusComponent } from './invoicemappingbmcustatus.component';

describe('InvoicemappingbmcustatusComponent', () => {
  let component: InvoicemappingbmcustatusComponent;
  let fixture: ComponentFixture<InvoicemappingbmcustatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvoicemappingbmcustatusComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicemappingbmcustatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
