import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldloginComponent } from './oldlogin.component';

describe('OldloginComponent', () => {
  let component: OldloginComponent;
  let fixture: ComponentFixture<OldloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OldloginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OldloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
