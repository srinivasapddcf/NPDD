import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 
import { OfficeModuleModule } from '../office-module/office-module.module';
import { CommonComponent } from './components/common/common.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataTablesModule } from 'angular-datatables';
import { sharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [CommonComponent, HomepageComponent],
  imports: [
            CommonModule,
            OfficeModuleModule,
            FormsModule,
            ReactiveFormsModule, 
            DataTablesModule,
            sharedModule,
            RouterModule
  ]
})
export class AdminModuleModule { }
