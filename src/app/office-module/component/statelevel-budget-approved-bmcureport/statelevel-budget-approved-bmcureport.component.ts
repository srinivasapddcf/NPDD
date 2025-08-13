import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { OfficeserviceService } from '../../services/officeservice.service';
import { ActivatedRoute, Router } from '@angular/router';

import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { data } from 'jquery';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-statelevel-budget-approved-bmcureport',
  standalone: true,
  imports: [CommonModule, FormsModule,DataTablesModule],
  templateUrl: './statelevel-budget-approved-bmcureport.component.html',
  styleUrl: './statelevel-budget-approved-bmcureport.component.css'
})
export class StatelevelBudgetApprovedBMCUReportComponent  implements OnInit, OnDestroy, AfterViewInit {

  Podetailslist: []; purchasedetailsList: [];
  excelData: any[] = [];
  FIRMID: any; formdata = []; approveddetailsList = []; 
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  pendtTrigger: Subject<any> = new Subject();


  reportTotal = {
    S_NO: "Total", INVOICE :"",  DISTRICT :"", MANDAL :"", BMCU :"",
    ADV_PER: 0,
    DELIVERY_PER: 0,
    INSTALL_PER: 0,
    ONEYEARCOMPLED: 0
}

districtId :any;districtName :any;  input: any;
  constructor(private toast: ToasterService,
      private utils: UtilsService,
      private session: SessionService,
      private OfficeModuleAPI: OfficeserviceService,
      private spinner: NgxSpinnerService,
      private router: Router,
       private route: ActivatedRoute,
  ) {route.queryParams.subscribe((params) => (this.input = params['request'])); }

  ngOnInit(): void {

    const decString = JSON.parse(this.utils.decrypt(this.input));
    this.districtId = decString.districtId;
    this.districtName = decString.districtName;
     

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
              TYPE: "3",
              input01: this.districtId,
              UNIQUEID: this.session.uniqueId,
              ROLE: this.session.desigId,
              INSERTEDBY: this.session.userName,
              
          }; this.spinner.show();debugger; //OFF_APPROVE_REPORTS
          const res = await this.OfficeModuleAPI.StatelevelBudget_Select(reqdistrict);
          this.spinner.hide();
          if (res.success) {
              this.excelData = [];
              this.approveddetailsList = res.result;

              for (var i = 0; i < this.approveddetailsList.length; i++) {    
                  let singleRow =
                  { 
                      S_NO: i + 1,
                      INVOICE: this.approveddetailsList[i].INVOICE, 
                      DISTRICT: this.approveddetailsList[i].DISTRICT,
                      MANDAL: this.approveddetailsList[i].MANDAL,
                      BMCU: this.approveddetailsList[i].BMCU, 
                      ADV_PER: this.approveddetailsList[i].ADV_PER,
                      DELIVERY_PER: this.approveddetailsList[i].DELIVERY_PER,
                      INSTALL_PER: this.approveddetailsList[i].INSTALL_PER, 
                      ONEYEARCOMPLED: this.approveddetailsList[i].ONEYEARCOMPLED,
                     
                      
                  } 
                  this.reportTotal.ADV_PER =parseFloat((parseFloat(this.reportTotal.ADV_PER.toFixed(2)) +parseFloat(this.approveddetailsList[i].ADV_PER)).toFixed(2));
                  this.reportTotal.DELIVERY_PER =parseFloat((parseFloat(this.reportTotal.DELIVERY_PER.toFixed(2)) +parseFloat(this.approveddetailsList[i].DELIVERY_PER)).toFixed(2));
                  this.reportTotal.INSTALL_PER =parseFloat((parseFloat(this.reportTotal.INSTALL_PER.toFixed(2)) +parseFloat(this.approveddetailsList[i].INSTALL_PER)).toFixed(2));
                  this.reportTotal.ONEYEARCOMPLED =parseFloat((parseFloat(this.reportTotal.ONEYEARCOMPLED.toFixed(2)) +parseFloat(this.approveddetailsList[i].ONEYEARCOMPLED)).toFixed(2));
                  
                     
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
    // if(this.session.desigId == "10")
    //   this.router.navigate(['/officeModule/statelevelbudgetapprovedReport']);
    // else
    // this.router.navigate(['/../statelevelbudgetapprovedReport']);


    if(this.session.desigId == "10")
        this.router.navigate(['/officeModule/statelevelbudgetapprovedReport']);
            else if(this.session.desigId == "50")
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

  btnback(): void {
    if(this.session.desigId == "10")
this.router.navigate(['/officeModule/statelevelbudgetapprovedReport']);
    else if(this.session.desigId == "50")
    this.router.navigate(['/MechanicalModule/statelevelbudgetapprovedReport']);
else
    this.router.navigate(['/../statelevelbudgetapprovedReport']);
  }
  btnExcel(): void {
      

      this.utils.JSONToCSVConvertor(
          this.excelData,
          ' Details Report',
          true
      );
  }

}
