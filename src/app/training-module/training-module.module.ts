import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TrainingModuleRoutingModule } from './training-module-routing.module';
import { CommonComponent } from './components/common/common.component';
import { HomepageComponent } from './components/homepage/homepage.component';
 
import { OfficeModuleModule } from '../office-module/office-module.module';
import { ScheduleMeetingComponent } from './components/schedule-meeting/schedule-meeting.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { sharedModule } from '../shared/shared.module';
import { NPDDAttendanceComponent } from './components/npddattendance/npddattendance.component';
 
 

@NgModule({
  declarations: [CommonComponent, HomepageComponent, ScheduleMeetingComponent, NPDDAttendanceComponent],
  imports: [
    CommonModule,
    TrainingModuleRoutingModule,
    OfficeModuleModule ,
    FormsModule,
        ReactiveFormsModule,
        DataTablesModule,
        sharedModule
  ]
})
export class TrainingModuleModule { }
