import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { Subject } from 'rxjs';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { OfficeserviceService } from '../../services/officeservice.service';
import { Router } from '@angular/router';
//import { DataTableDirective } from 'angular-datatables';


import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
import { data } from 'jquery';
import { DataTablesModule } from 'angular-datatables';

@Component({
  selector: 'app-invoicesapproveddetailsreport',
  standalone: true,
  imports: [CommonModule, FormsModule,DataTablesModule],
  templateUrl: './invoicesapproveddetailsreport.component.html',
  styleUrl: './invoicesapproveddetailsreport.component.css'
})
export class InvoicesapproveddetailsreportComponent  implements OnInit, OnDestroy, AfterViewInit {
  Podetailslist: []; purchasedetailsList: any[] = [];DistrictdetailsList: any[] = [];
  PMID: any;
  excelData: any[] = []; 
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  pendtTrigger: Subject<any> = new Subject();
   



  reportTotal = {
      S_NO: "--",
      DISTRICTNAME: "Total",
      QUANTITY: 0,
      AMOUNT: 0,
      INVOICE_NO:0,
      INVOICE_QUANTITY: 0,
      INVOICE_AMOUNT: 0,
      BALANCE_QUANTITY: 0,
      BALANCE_INVOICE: 0,
      ADVANCE_PER : 0,
      ADVANCE_AMNT: 0,
      DELIVERY_PER: 0,
      DELIVERY_AMNT: 0,
      INSTALL_PER: 0, 
      INSTALL_AMNT: 0,
      FINAL_PER: 0,
      FINAL_AMNT: 0,
      TOTAL_PER: 0,
      TOTAL_AMNT: 0,

  }

  
  constructor(private toast: ToasterService, 
      private utils: UtilsService,
      private session: SessionService,
      private OfficeModuleAPI: OfficeserviceService,
      private spinner: NgxSpinnerService, private router: Router
  ) { }

  ngOnInit(): void {
      if (this.session.uniqueId != "" && this.session.desigId != "") {
          this.podetails();
      } else {
          this.router.navigate(['/shared/UnAuthorized']);
      }
  }

  async podetails(): Promise<void> {
      try {
          const req = {
              type: "27",//4
              UNIQUEID: this.session.uniqueId,
              ROLE: this.session.desigId,
              INSERTEDBY: this.session.userName
          }; 
          this.spinner.show();
          const res = await this.OfficeModuleAPI.tenderdetailsSelect(req);
          this.spinner.hide();
          if (res.success) {
              this.Podetailslist = res.result;
          } else {
              this.toast.info(res.message);
          }
          this.spinner.hide();
      }
      catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }
  }



  async POBYPONUMBER(): Promise<void> {
    this.DistrictdetailsList = [];
    this.purchasedetailsList = [];
      this.excelData = [];
      try {
        this.DistrictdetailsList = [];
        this.purchasedetailsList = [];
          this.excelData = [];


          const reqdistrict = {
              type: "5",
              UNIQUEID: this.session.uniqueId,
              ROLE: this.session.desigId,
              INSERTEDBY: this.session.userName,
              id: this.PMID,
          }; this.spinner.show();    this.purchasedetailsList = []; //off_tenderrequ_details
          const res = await this.OfficeModuleAPI.tenderdetailsSelect(reqdistrict);
          this.spinner.hide();
          if (res.success) {
              this.excelData = [];
              this.purchasedetailsList = res.result;
              for (var i = 0; i < this.purchasedetailsList.length; i++) {
                  let singleRow =
                  {
                      S_NO: i + 1,
                      FORM_MNAME: this.purchasedetailsList[i].FIRMNAME,
                      COMPONENT_NAME: this.purchasedetailsList[i].COMPNAME,
                      PURCHASE_ORDER_DATE: this.purchasedetailsList[i].PODATE,
                      PURCHASE_ORDER: this.purchasedetailsList[i].PONUMBER,
                      TOTAL_UNITS: this.purchasedetailsList[i].UNITS,
                      TOTAL_RATE: this.purchasedetailsList[i].PRICES, 
                  }
                  // this.excelData.push(singleRow); 
              }
              const obj = {            
                  type: "66",     
                  INPUT01: this.PMID
              };  

              this.reportTotal = {
      S_NO: "--",
      DISTRICTNAME: "Total",
      QUANTITY: 0,
      AMOUNT: 0,
      INVOICE_NO:0,
      INVOICE_QUANTITY: 0,
      INVOICE_AMOUNT: 0,
      BALANCE_QUANTITY: 0,
      BALANCE_INVOICE: 0,
      ADVANCE_PER : 0,
      ADVANCE_AMNT: 0,
      DELIVERY_PER: 0,
      DELIVERY_AMNT: 0,
      INSTALL_PER: 0, 
      INSTALL_AMNT: 0,
      FINAL_PER: 0,
      FINAL_AMNT: 0,
      TOTAL_PER: 0,
      TOTAL_AMNT: 0,

  }
              this.DistrictdetailsList = [];this.spinner.show(); //OFF_APPROVE_SELECT
              const res1 = await this.OfficeModuleAPI.ApprovalDetails_Select(obj);
              this.spinner.hide();debugger;
              if (res1.success) {   this.DistrictdetailsList =null;
                  this.DistrictdetailsList=res1.result; 
                  for (var j = 0; j < this.DistrictdetailsList.length; j++) { 
                  this.reportTotal.QUANTITY  =parseFloat((parseFloat(this.reportTotal.QUANTITY.toFixed(2)) + parseFloat(this.DistrictdetailsList[j].QUANTITY)).toFixed(2)); //.toFixed(2)
                  this.reportTotal.AMOUNT  = parseFloat((parseFloat(this.reportTotal.AMOUNT .toFixed(2))+ parseFloat(this.DistrictdetailsList[j].AMOUNT)).toFixed(2));
                 
                  this.reportTotal.INVOICE_NO  =parseFloat((parseFloat(this.reportTotal.INVOICE_NO.toFixed(2))+parseFloat( this.DistrictdetailsList[j].INVOICE_NO)).toFixed(2));

                  this.reportTotal.INVOICE_QUANTITY  =parseFloat((parseFloat(this.reportTotal.INVOICE_QUANTITY.toFixed(2))+parseFloat( this.DistrictdetailsList[j].INVOICE_QUANTITY)).toFixed(2));


                  this.reportTotal.INVOICE_AMOUNT =parseFloat((parseFloat(this.reportTotal.INVOICE_AMOUNT .toFixed(2))+parseFloat(this.DistrictdetailsList[j].INVOICE_AMOUNT)).toFixed(2));
                  this.reportTotal.BALANCE_QUANTITY =parseFloat((parseFloat(this.reportTotal.BALANCE_QUANTITY.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].BALANCE_QUANTITY)).toFixed(2));
                  this.reportTotal.BALANCE_INVOICE =parseFloat((parseFloat(this.reportTotal.BALANCE_INVOICE.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].BALANCE_INVOICE)).toFixed(2));
                        
                     
                  this.reportTotal.ADVANCE_PER =parseFloat((parseFloat(this.reportTotal.ADVANCE_PER.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].ADVANCE_PER)).toFixed(2));
                  this.reportTotal.ADVANCE_AMNT =parseFloat((parseFloat(this.reportTotal.ADVANCE_AMNT.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].ADVANCE_AMNT)).toFixed(2));
                  this.reportTotal.DELIVERY_PER =parseFloat((parseFloat(this.reportTotal.DELIVERY_PER.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].DELIVERY_PER)).toFixed(2));
                  this.reportTotal.DELIVERY_AMNT =parseFloat((parseFloat(this.reportTotal.DELIVERY_AMNT.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].DELIVERY_AMNT)).toFixed(2));
                  this.reportTotal.INSTALL_PER =parseFloat((parseFloat(this.reportTotal.INSTALL_PER.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].INSTALL_PER)).toFixed(2));
                  this.reportTotal.INSTALL_AMNT =parseFloat((parseFloat(this.reportTotal.INSTALL_AMNT.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].INSTALL_AMNT)).toFixed(2));
                  this.reportTotal.FINAL_PER =parseFloat((parseFloat(this.reportTotal.FINAL_PER.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].FINAL_PER)).toFixed(2));
                  this.reportTotal.FINAL_AMNT =parseFloat((parseFloat(this.reportTotal.FINAL_AMNT.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].FINAL_AMNT)).toFixed(2));
                  this.reportTotal.TOTAL_PER =parseFloat((parseFloat(this.reportTotal.TOTAL_PER.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].TOTAL_PER)).toFixed(2));
                  this.reportTotal.TOTAL_AMNT =parseFloat((parseFloat(this.reportTotal.TOTAL_AMNT.toFixed(2)) +parseFloat(this.DistrictdetailsList[j].TOTAL_AMNT)).toFixed(2));
                  
                  this.excelData.push(this.DistrictdetailsList[j]);
                }  
              }
               
              this.excelData.push(this.reportTotal); 
              this.spinner.hide();
               //  this.rerender();
              //this.pono=this.purchasedetailsList[0].PONUMBER;
          } 
          else { this.spinner.hide();
              this.toast.info(res.message);
          }
          this.spinner.hide();
      } catch (error) {
          this.spinner.hide();
          this.utils.catchResponse(error);
      }
  }
  btnExcel(): void {         
      

      this.utils.JSONToXLSXConvertor(
          this.excelData,
          'Po Based Invoice Approved Details Report',
          true
      );
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

}
