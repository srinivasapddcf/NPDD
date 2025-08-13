import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
//import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';

  import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
 
 import {  DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';
import { OfficeserviceService } from '../../services/officeservice.service';

@Component({
  selector: 'app-invoicemappingbmcustatus',
  standalone: true,
  imports: [CommonModule,FormsModule,DataTablesModule],
  templateUrl: './invoicemappingbmcustatus.component.html',
  styleUrl: './invoicemappingbmcustatus.component.css'
})
export class InvoicemappingbmcustatusComponent implements OnInit, OnDestroy, AfterViewInit {
  mdacAccountList = []; invbmcuList = []; id:any;ApRjList=[];
  districtName: any;
   requestType: any;
   headingText: any;
  dashboardCounts = {
    APPROVED: '0',
    PENDING: '0',
    REJECTED: '0',
  };
  // @ViewChild(DataTableDirective, { static: false })
  // dtElement: DataTableDirective;

  // dtOptions: DataTables.Settings = {};
  // dtTrigger: Subject<any> = new Subject();
   

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject();
  pendtTrigger: Subject<any> = new Subject();

  constructor(
      private spinner: NgxSpinnerService,
      private toast: ToasterService,
      private router: Router,
    private OfficeModuleAPI: OfficeserviceService,
      private utils: UtilsService,
    // private logger: LoggerService,
    private session: SessionService
  ) {} 

  ngOnInit(): void {
    

    if(this.session.uniqueId !="" && this.session.desigId != ""){ 
      this.loadDashboard(); 
    }
    else
    {
      this.router.navigate(['/shared/UnAuthorized']);
    }

  }
  
  async btnVerify(obj): Promise<void> {

    try {  debugger;


         
//  DISTRICT_CODE=PDISTRICT,
//  BMCU_CODE=PBMCU,
//  INVID=PINVOICE_NUMBER,
//  STATUS=PSTATUS,
//  APPROVED_BY=PINSERTED_BY, 
//  REJECTED_BY=PINSERTED_BY,
//  REMARKS=PINPUT04
if(obj.DISTRICT_CODE == null || obj.DISTRICT_CODE == ""){
  this.toast.info("Please Select District Name");return;
}
if(obj.BMCU_CODE == null || obj.BMCU_CODE == ""){
  this.toast.info("Please Select BMCU Name");return;
}
if(obj.INVOICENO == null || obj.INVID == ""){
  this.toast.info("Please Enter Invoice Number");return;  
}
if(obj.STATUS == null || obj.STATUS == ""){
  this.toast.info("Please Select Status");return; 
}
if(obj.STATUS == "1003")
{
  if(obj.REMARKS == null || obj.REMARKS == ""){
    this.toast.info("Please Enter Remarks");return;  
  }
}    
 
if(obj.STATUS == "1002") this.id="1";else this.id="2";

      const req = { TYPE:"11",
        DISTRICT:obj.DISTRICT_CODE,
        BMCU:obj.BMCU_CODE,
        INVOICE_NUMBER:obj.INVID,
        STATUS:this.id,         
        INPUT04:obj.REMARKS,
        UNIQUE_ID:this.session.uniqueId,ROLE:this.session.desigId,INSERTED_BY:this.session.userName }; 
      this.spinner.show(); 
       const res = await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req);  
       this.spinner.hide();
      if (res.success) {  
        this.dashboardCounts = res.result[0];  
      }  

    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }this.spinner.hide();


  }


  async loadDashboard(): Promise<void> {
    try {  debugger;
      const req = { TYPE:"9",UNIQUE_ID:this.session.uniqueId,ROLE:this.session.desigId,INSERTED_BY:this.session.userName }; 
      this.spinner.show(); 
       const res = await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req);  
       this.spinner.hide();
      if (res.success) {  
        this.dashboardCounts = res.result[0];  
      }  

    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }this.spinner.hide();
  }

  async btnMdacAccountDashboardDetails(obj): Promise<void> {
    try { this.mdacAccountList = [];
      this.requestType = obj;
      // const req = {
      //   uniqueId: this.session.uniqueId,
      //   actionTaken: this.requestType,
      // };
      this.mdacAccountList = []; 
      const req = { TYPE:"10",STATUS:this.requestType,UNIQUE_ID:this.session.uniqueId,ROLE:this.session.desigId,INSERTED_BY:this.session.userName }; 

      this.mdacAccountList = []; 

      if (this.requestType === null && this.dashboardCounts.PENDING === '0') {
        this.mdacAccountList = []; 
        return;
      }
      if (this.requestType === '1' && this.dashboardCounts.APPROVED === '0') {
        this.mdacAccountList = []; 
        return;
      }

      if (this.requestType === '2' && this.dashboardCounts.REJECTED === '0') {
        this.mdacAccountList = []; 
        return;
      }
      debugger;
      this.spinner.show();
      let res: any;this.mdacAccountList = []; 
      if (this.requestType === null || this.requestType === '0') {
        this.headingText = 'PENDING LIST';  
        res =  await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req); 
        if (res.success) {  this.mdacAccountList = res.result;}else this.mdacAccountList = []; 
      } else if (this.requestType === '1') {  
        this.headingText = 'APPROVED LIST';
        res =  await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req);  
        if (res.success) {  this.ApRjList = res.result;}else this.ApRjList = [];
      } else if (this.requestType === '2') { 
        this.headingText = 'REJECTED  LIST';
        res =  await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req);  
        if (res.success) {  this.ApRjList = res.result;}else this.ApRjList = [];
      }
      this.spinner.hide();
 
  

 
      // if (res.success) { 
      //   this.mdacAccountList = res.result;
      // } else {
      //   this.toast.info(res.message);
      // }
            this.rerender();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    } 
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    

    $('#DataTables_Table_1').DataTable().destroy();
$('#DataTables_Table_1').DataTable({
    // your options here
});
this.dtTrigger.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.dtTrigger.next();
  }

  rerender(): void {

    if (($.fn.DataTable as any).isDataTable('#DataTables_Table_1')) {
      $('#DataTables_Table_1').DataTable().clear().destroy();
  }
  $('#DataTables_Table_1').DataTable({
      // your options here
  });

    
  }
}
  