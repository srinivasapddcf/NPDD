import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NPDDAttendanceComponent } from './npddattendance.component';

describe('NPDDAttendanceComponent', () => {
  let component: NPDDAttendanceComponent;
  let fixture: ComponentFixture<NPDDAttendanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NPDDAttendanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NPDDAttendanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
