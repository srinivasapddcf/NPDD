
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { OfficeserviceService } from '../../services/officeservice.service';
import { Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { data } from 'jquery';
import { DataTablesModule } from 'angular-datatables';
 
@Component({
  selector: 'app-statelevel-budget-details-report',
  standalone: true,
  imports: [CommonModule, FormsModule,DataTablesModule],
  templateUrl: './statelevel-budget-details-report.component.html',
  styleUrl: './statelevel-budget-details-report.component.css'
})
export class StatelevelBudgetDetailsReportComponent implements OnInit, OnDestroy, AfterViewInit {

  Podetailslist: []; purchasedetailsList: [];
  excelData: any[] = [];
  FIRMID: any; formdata = []; firmdetailsList = []; 
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  pendtTrigger: Subject<any> = new Subject();


  reportTotal = {
    S_NO: "--",
    FINCIAL_YEAR: "Total",
    SANCTION_AMOUNT: 0,
    APPROVED_AMOUNT: 0,
    NO_OF_APPROVED: 0,
    BLANCED_AMOUNT: 0  
}


  constructor(private toast: ToasterService,
      private utils: UtilsService,
      private session: SessionService,
      private OfficeModuleAPI: OfficeserviceService,
      private spinner: NgxSpinnerService,
      private router: Router
  ) { }

  ngOnInit(): void { debugger;
      if (this.session.uniqueId != "" && this.session.desigId != "") {
        //  this.podetails();
        this.FIRMBYFIRMID();
      }
      else {
          this.router.navigate(['/shared/UnAuthorized']);
      }

  }

  // async podetails(): Promise<void> {
  //     try {
  //         const reqdistrict = {
  //             type: "2",
  //             UNIQUEID: this.session.uniqueId,
  //             ROLE: this.session.desigId,
  //             INSERTEDBY: this.session.userName
  //         };
  //         this.spinner.show();
  //         const res = await this.OfficeModuleAPI.office_po_select(reqdistrict);
  //         this.spinner.hide();
  //         if (res.success) {
  //             this.formdata = res.result;
  //         } else {
  //             this.toast.info(res.message);
  //         }
  //         this.spinner.hide();
  //     }
  //     catch (error) {
  //         this.spinner.hide();
  //         this.utils.catchResponse(error);
  //     }
  // }

  async FIRMBYFIRMID(): Promise<void> {

      try {
          // if (this.utils.isEmpty(this.FIRMID)) {
          //     this.toast.warning('Please select FIRM');
          //     return;
          // }
          debugger;
          this.excelData = [];
          const reqdistrict = {
              TYPE: "1",
              UNIQUEID: this.session.uniqueId,
              ROLE: this.session.desigId,
              INSERTEDBY: this.session.userName,
              
          }; this.spinner.show(); //OFF_APPROVE_REPORTS
          const res = await this.OfficeModuleAPI.StatelevelBudget_Select(reqdistrict);
          this.spinner.hide();
          if (res.success) {
              this.excelData = [];
              this.firmdetailsList = res.result;

              for (var i = 0; i < this.firmdetailsList.length; i++) {
                  let singleRow =
                  { 
                      S_NO: i + 1,
                      FINCIAL_YEAR: this.firmdetailsList[i].FINCIAL_YEAR,
                      SANCTION_AMOUNT: this.firmdetailsList[i].SANCTION_AMOUNT,
                      APPROVED_AMOUNT: this.firmdetailsList[i].APPROVED_AMOUNT,
                      NO_OF_APPROVED: this.firmdetailsList[i].NO_OF_APPROVED,
                      BLANCED_AMOUNT: this.firmdetailsList[i].BLANCED_AMOUNT, 
                  } 
                  this.reportTotal.SANCTION_AMOUNT =parseFloat((parseFloat(this.reportTotal.SANCTION_AMOUNT.toFixed(2)) +parseFloat(this.firmdetailsList[i].SANCTION_AMOUNT)).toFixed(2));
                  this.reportTotal.APPROVED_AMOUNT =parseFloat((parseFloat(this.reportTotal.APPROVED_AMOUNT.toFixed(2)) +parseFloat(this.firmdetailsList[i].APPROVED_AMOUNT)).toFixed(2));
                  this.reportTotal.NO_OF_APPROVED =parseFloat((parseFloat(this.reportTotal.NO_OF_APPROVED.toFixed(2)) +parseFloat(this.firmdetailsList[i].NO_OF_APPROVED)).toFixed(2));
                  this.reportTotal.BLANCED_AMOUNT =parseFloat((parseFloat(this.reportTotal.BLANCED_AMOUNT.toFixed(2)) +parseFloat(this.firmdetailsList[i].BLANCED_AMOUNT)).toFixed(2));
                     
                  this.excelData.push(singleRow);
              }
              this.excelData.push(this.reportTotal);

               this.rerender();
          } else {
              this.toast.info(res.message);
          }
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }

  }

  btnGetDetails(obj): void {
     if(this.session.desigId == "10")
      this.router.navigate(['/officeModule/statelevelbudgetapprovedReport']);  //officeModule
    else   if(this.session.desigId == "50")
    this.router.navigate(['/MechanicalModule/statelevelbudgetapprovedReport']);
    else   
        this.router.navigate(['/../statelevelbudgetapprovedReport']);

  }
 

  ngOnDestroy(): void {
      //     // Do not forget to unsubscribe the event
      this.dtTrigger.unsubscribe();
  }
  ngAfterViewInit(): void {
      this.dtTrigger.next();
  }
  rerender(): void {
      this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
          // Destroy the table first
          dtInstance.destroy();
          // Call the dtTrigger to rerender again
          this.dtTrigger.next();
      });
  }
  btnExcel(): void {
      

      this.utils.JSONToCSVConvertor(
          this.excelData,
          'Firm Details Report',
          true
      );
  }

}
