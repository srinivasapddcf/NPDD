// import { CommonModule } from '@angular/common';
// import { Component, ViewChild , OnInit, ElementRef } from '@angular/core';
// import { FormsModule, NgModel } from '@angular/forms';
// import { Router } from '@angular/router';import moment from 'moment';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
// import { NgxSpinnerService } from 'ngx-spinner'; 
// import { LoggerService } from 'src/app/shared/services/logger.service';  
// import { SessionService } from 'src/app/shared/services/session.service';
// import { ToasterService } from 'src/app/shared/services/toaster.service';
// import { UtilsService } from 'src/app/shared/services/utils.service'; 
// import { DomSanitizer } from '@angular/platform-browser';  
// import { OfficeserviceService } from '../../services/officeservice.service'; 
// import { DataTableDirective, DataTablesModule } from 'angular-datatables';
// import { Subject } from 'rxjs';
 
import { Subject } from 'rxjs';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { promise } from 'protractor';
 //import { McuMappingService } from '../../services/officeservice.service'; 
 import { OfficeserviceService } from '../../services/officeservice.service'; 
import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective } from 'angular-datatables';
import { NgxSpinnerService } from 'ngx-spinner';
import { AngleDoubleLeftIcon } from "primeng/icons/angledoubleleft";
//import { McuMappingService } from 'src/app/mentorModule/services/mcu-mapping.service';
 

@Component({
  selector: 'app-training-expenditure-details',
  standalone: true,
 imports: [CommonModule, FormsModule, TableModule],  
  templateUrl: './training-expenditure-details.component.html',
  styleUrl: './training-expenditure-details.component.css'
})
export class TrainingExpenditureDetailsComponent    implements OnInit {

   id:any;jobnotification:any;
  jobDetailsList = [];
  jobDetailsListA = [];
  jobDetailsListR = [];

  jobDetailsListall = [];
  jobDetailsListaddinf = [];
  jobDetailsListresub = [];

  reportTotals = {
    S_NO: '-',
    REGISTRATION_ID: '-',
    NAME: '-',
    FATHER_OR_MOTHER_NAME: '-',
    GENDER: '-',
    DOB: '',
    EMAIL_ID: '-',
    MOBILE_NUMBER: '-'
  };
  excelData = [];
  excelDataA = [];
  excelDataR = [];

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;

  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject();

  showaprovedPopup = false; 

   
  
  ALLAPPL_div = false; 
ADDINFO_div = false;
RESUBMITTED_div= false;


  REJECTED_div = false;
  PENDING_div = false;
  reportType: any;
  APPROVED_div = false;

  IndentDashboardview = false;
  StockIncrementCounts: any = '';

 


  PendingList: any[] = [];
  ApprovedList: any[] = [];
  RejectList: any[] = [];


  filterdata: any[] = [];
  filterdata_one: any[] = [];
  filterdata_two: any[] = [];


EXPENDITURE:any; 
MEETING_ID :any; 
NO_OF_PARTICIPANT :any; 
STATUS :any; 
SUB_BY :any; 
SUB_DATE :any; 
TRAINING_DATE :any; 
TRAINING_ID :any; 
TRAINING_TIME :any; 
unique_id;any;
num1:any;
typenum:any;
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    //private vvFarmerAPI: VolunteerFarmerDataService,
    private utils: UtilsService,
    private logger: LoggerService,
    private session: SessionService,
   // private stateapi: StateService,
    private stateapi: OfficeserviceService,
  ) { }

  ngOnInit(): void {
debugger;
     
    this.loadCountsDetails();
     this.btnDashboardDetails('1');
  }
  reportTotalsA = {
    S_NO: '-',
    REGISTRATION_ID: '-',
    NAME: '-',
    FATHER_OR_MOTHER_NAME: '-',
    GENDER: '-',
    DOB: '',
    EMAIL_ID: '-',
    MOBILE_NUMBER: '-'
  };
  reportTotalsR = {
    S_NO: '-',
    REGISTRATION_ID: '-',
    NAME: '-',
    FATHER_OR_MOTHER_NAME: '-',
    GENDER: '-',
    DOB: '',
    EMAIL_ID: '-',
    MOBILE_NUMBER: '-'
  };

  async Loadcounts(): Promise<void>{
    try {
      if(this.jobnotification !='' && this.jobnotification!=undefined){
this.loadCountsDetails();
    this.btnDashboardDetails('1');
      }
else
{
   this.toast.info("Select Job Notification");
}
      

    }catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  async loadCountsDetails(): Promise<void> {
      
    try {debugger;
      this.spinner.show();
      const req = {
        type: "25", 
         
      } 
      const response = await this.stateapi.TrainingDetailsById(req);
debugger;
      if (response.success) {
        this.spinner.hide();
        this.StockIncrementCounts = response.result[0];
        this.IndentDashboardview = true;

        console.log(response.result);
      } else {
        this.toast.info(response.message);
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }
  async loadReport(obj: any): Promise<void> {
    try { 
       
      this.reportTotals = {
        S_NO: '-',
        REGISTRATION_ID: '-',
        NAME: '-',
        FATHER_OR_MOTHER_NAME: '-',
        GENDER: '-',
        DOB: '',
        EMAIL_ID: '-',
        MOBILE_NUMBER: '-'
      };
      this.reportTotalsA = {
        S_NO: '-',
        REGISTRATION_ID: '-',
        NAME: '-',
        FATHER_OR_MOTHER_NAME: '-',
        GENDER: '-',
        DOB: '',
        EMAIL_ID: '-',
        MOBILE_NUMBER: '-'
      };
      this.reportTotalsR = {
        S_NO: '-',
        REGISTRATION_ID: '-',
        NAME: '-',
        FATHER_OR_MOTHER_NAME: '-',
        GENDER: '-',
        DOB: '',
        EMAIL_ID: '-',
        MOBILE_NUMBER: '-'
      };
this.id=obj;
      const req = {
        type: "26",
        num1: obj, 
        //STATUS:this.jobnotification
      };

      this.spinner.show();
       this.jobDetailsList = [];
        this.jobDetailsListA = [];
        this.jobDetailsListR = [];
        this.jobDetailsListall = [];
        this.jobDetailsListaddinf = [];
        this.jobDetailsListresub = [];
        this.excelData = [];


         this.PENDING_div = false;
          this.APPROVED_div = false;
          this.REJECTED_div = false;
          this.ALLAPPL_div = false;
          this.ADDINFO_div = false;
           this.RESUBMITTED_div = false;


      const res = await this.stateapi.TrainingDetails_ID(req);
      console.log(res);debugger;
      if (res.success) {
       
        if (obj == "1" && res.result != "") {  //PENDING 
          this.PENDING_div = true; 
          this.jobDetailsList = res.result;
          this.filterdata = this.jobDetailsList; 
        }
        if (obj == "2" && res.result != "") {//APPROVALS  
          this.APPROVED_div = true; 
          this.jobDetailsListA = res.result;
          this.filterdata_one = this.jobDetailsListA; 
        }
        if (obj == "3" && res.result != "") {//REJECTED  
          this.REJECTED_div = true; 
          this.jobDetailsListR = res.result;
          this.filterdata_two = this.jobDetailsListR;

        } 
        if (obj == "4" && res.result != "") { //ADDINFO  
          this.ADDINFO_div = true; 
          this.jobDetailsListaddinf = res.result;
         // this.filterdata_two = this.jobDetailsListR;

        }
        if (obj == "5" && res.result != "") { //RESUBMITTED 
           this.RESUBMITTED_div = true;
          this.jobDetailsListresub = res.result;
         // this.filterdata_two = this.jobDetailsListR;

        }

        // for (let i = 0; i < this.jobDetailsList.length; i++) {
        //   const singleRow = {
        //     S_NO: i + 1,
        //     REGISTRATION_ID: this.jobDetailsList[i].REGISTRATION_ID,
        //     NAME: this.jobDetailsList[i].NAME,
        //     FATHER_OR_MOTHER_NAME: this.jobDetailsList[i].FATHER_OR_MOTHER_NAME,
        //     GENDER: this.jobDetailsList[i].GENDER,
        //     DOB: this.jobDetailsList[i].DATE_OF_BIRTH_SCC,
        //     EMAIL_ID: this.jobDetailsList[i].EMAIL_ID,
        //     MOBILE_NUMBER: this.jobDetailsList[i].MOBILE_NUMBER,


        //   };
        //   this.excelData.push(singleRow);
        // }
        // this.excelData.push(this.reportTotals);

        // for (let i = 0; i < this.jobDetailsListR.length; i++) {


        //   const singleRow = {
        //     S_NO: i + 1,
        //     REGISTRATION_ID: this.jobDetailsListR[i].REGISTRATION_ID,
        //     NAME: this.jobDetailsListR[i].NAME,
        //     FATHER_OR_MOTHER_NAME: this.jobDetailsListR[i].FATHER_OR_MOTHER_NAME,
        //     GENDER: this.jobDetailsListR[i].GENDER,
        //     DOB: this.jobDetailsListR[i].DATE_OF_BIRTH_SCC,
        //     EMAIL_ID: this.jobDetailsListR[i].EMAIL_ID,
        //     MOBILE_NUMBER: this.jobDetailsListR[i].MOBILE_NUMBER,


        //   };
        //   this.excelDataR.push(singleRow);
        // }
        // this.excelDataR.push(this.reportTotalsR);

        // for (let i = 0; i < this.jobDetailsListA.length; i++) {


        //   const singleRow = {
        //     S_NO: i + 1,
        //     REGISTRATION_ID: this.jobDetailsListA[i].REGISTRATION_ID,
        //     NAME: this.jobDetailsListA[i].NAME,
        //     FATHER_OR_MOTHER_NAME: this.jobDetailsListA[i].FATHER_OR_MOTHER_NAME,
        //     GENDER: this.jobDetailsListA[i].GENDER,
        //     DOB: this.jobDetailsListA[i].DATE_OF_BIRTH_SCC,
        //     EMAIL_ID: this.jobDetailsListA[i].EMAIL_ID,
        //     MOBILE_NUMBER: this.jobDetailsListA[i].MOBILE_NUMBER,


        //   };
        //   this.excelDataA.push(singleRow);
        // }
        // this.excelDataA.push(this.reportTotalsA);


 


      } else {

        this.toast.warning("No Records Found");  //res.message
      }
      // this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  btnExcel(): void {
    this.utils.JSONToCSVConvertor(
      this.excelData,
      'Job Details Report Pending Records',
      true
    );
  }
  btnExcelone(): void {
    this.utils.JSONToCSVConvertor(
      this.excelDataA,
      'Job Details Report Approved Records',
      true
    );
  }
  btnExceltwo(): void {
    this.utils.JSONToCSVConvertor(
      this.excelDataR,
      'Job Details Report Reject Records',
      true
    );
  }

  btnDashboardDetails(id: any): void {
 
       // this.ALLAPPL_div = false;
        this.PENDING_div = false;
        this.ADDINFO_div = false;
        this.RESUBMITTED_div = false;
        this.APPROVED_div = false;
        this.REJECTED_div = false;
        
        
        
        
        


    this.reportType = id;
    if (id === '1') {  //pending

      this.PENDING_div = true;
      // this.APPROVED_div = false;
      // this.REJECTED_div = false;
      // this.ALLAPPL_div = false;
      // this.ADDINFO_div = false;
      //   this.RESUBMITTED_div = false;
      this.loadReport("1");

    } else if (id === '2') { //approved
     // this.PENDING_div = false;
      this.APPROVED_div = true;
//       this.REJECTED_div = false;
//       this.ADDINFO_div = false;
//  this.ALLAPPL_div = false;
//    this.RESUBMITTED_div = false;
      this.loadReport("2");

    } else if (id === '3') { //Rejected
      this.REJECTED_div = true;
        // this.PENDING_div = false;
        // this.APPROVED_div = false;
        // this.ADDINFO_div = false;
        // this.ALLAPPL_div = false;
        // this.RESUBMITTED_div = false;
      this.loadReport("3"); 
    }  else if (id === '4') { //Additional information requested
      // this.REJECTED_div = false;
      // this.PENDING_div = false;
      // this.APPROVED_div = false;
      // this.ALLAPPL_div = false;
      // this.RESUBMITTED_div = false;
       this.ADDINFO_div = true;
        
      this.loadReport("4");
    } else if (id === '5') {//Resubmitted
      // this.REJECTED_div = false;
      // this.PENDING_div = false;
      // this.APPROVED_div = false;
      //  this.ALLAPPL_div = false;
      //  this.ADDINFO_div = false;
         this.RESUBMITTED_div = true;
      this.loadReport("5");
    }   
    // else if (id === '6') {//all applications
    //     // this.REJECTED_div = false;
    //     // this.PENDING_div = false;
    //     // this.APPROVED_div = false;
    //     // this.ADDINFO_div = false;
    //     // this.RESUBMITTED_div = false;
    //    this.ALLAPPL_div = true;
       
    //   this.loadReport("6");
    // }  




  }

  message = "";
  Remarks = "";
  StockpointName = '';
  Indentquantity = '';
  onClear() {
    this.showaprovedPopup = false;
     
    this.message = "";
    this.Remarks = "";
    this.StockpointName = '';
    this.Indentquantity = '';
  }

  async btnPdfView(pdf): Promise<void> {
    try {
      debugger;
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(pdf);
      if (res.success) {
        this.utils.viewPDF(res.result);
        // let signedByPdf = 'data:application/pdf, ' + res.result;
        // window.open(signedByPdf, '_blank');
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

   async btnImgView(pdf): Promise<void> {
    try {
      debugger;
      this.spinner.show();
      const res = await this.utils.DMSFileDownload(pdf);
      if (res.success) {
        this.utils.viewImage(res.result);
        // let signedByPdf = 'data:application/pdf, ' + res.result;
        // window.open(signedByPdf, '_blank');
      } else {
        this.toast.info(res.message);
      }
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }


 Databind(obj:any)
 {
 this.EXPENDITURE =obj.EXPENDITURE;
this.MEETING_ID  =obj.MEETING_ID;
this.NO_OF_PARTICIPANT   =obj.NO_OF_PARTICIPANT;
this.STATUS   =obj.STATUS;
this.SUB_BY   =obj.SUB_BY;
this.SUB_DATE   =obj.SUB_DATE;
this.TRAINING_DATE  =obj.TRAINING_DATE; 
this.TRAINING_ID   =obj.TRAINING_ID;
this.TRAINING_TIME  =obj.TRAINING_TIME;
this.unique_id = this.session.uniqueId;
 }

  btnUpdateDetails(obj: any) {
    debugger;
    //#region 
    // this.unique_id = obj.UNIQUEID;
    // //this.name = obj.NAME;
    // this.meeting_id = obj.MEETING_ID
    // this.num1 = "1";
    // this.message = "APPROVE";
    // this.Remarks = "Approved.";
    // this.showaprovedPopup = true;

// this.EXPENDITURE =obj.EXPENDITURE;
// this.MEETING_ID  =obj.MEETING_ID;
// this.NO_OF_PARTICIPANT   =obj.NO_OF_PARTICIPANT;
// this.STATUS   =obj.STATUS;
// this.SUB_BY   =obj.SUB_BY;
// this.SUB_DATE   =obj.SUB_DATE;
// this.TRAINING_DATE  =obj.TRAINING_DATE; 
// this.TRAINING_ID   =obj.TRAINING_ID;
// this.TRAINING_TIME  =obj.TRAINING_TIME;
//#endregion

this.Databind(obj);
this.message = "APPROVE";
this.Remarks = "Approved."; 
this.num1 = "2";this.typenum="27";  
this.showaprovedPopup = true;
   
  }

  btnRejectDetails(obj: any) {
    debugger;
    // this.message = "REJECT";
    // this.UNIQUEID = obj.UNIQUEID;
    // this.name = obj.NAME;
    // this.Registration = obj.REGISTRATION_ID
    // this.statuscode = "2";
    // this.Remarks = "Rejected."
    // this.showaprovedPopup = true;
this.Databind(obj); 
this.message = "REJECT";
this.Remarks = "Rejected."; 
this.num1 = "3";
this.typenum="27"; 
this.showaprovedPopup = true;

  }
  

  
 btnRemarks2Details(obj: any) {
    debugger;
    this.Databind(obj);

   this.message = "REMARKS"; 
    this.num1 = "4";  
    this.Remarks = "Remarks."
    this.typenum="28"; 
    this.showaprovedPopup = true;
  }


 btnRemarksDetails(obj: any) {
    debugger;
    this.Databind(obj);

   this.message = "REMARKS"; 
    this.num1 = "4"; //3
    this.Remarks = "Remarks."
    this.typenum="28"; 
    this.showaprovedPopup = true;
  }

  btnResubApprovedDetails(obj: any) {
    debugger;
    this.Databind(obj);
    this.message = "RESUBMIT_APPROVE";  
    this.num1 = "6";     this.typenum="29"; 
    this.Remarks = "APPROVE";
    this.showaprovedPopup = true;
  }

   btnResubRejectDetails(obj: any) {
    debugger;
    this.Databind(obj);
    this.message = "RESUBMIT_REJECT"; 
    this.num1 = "8";  this.typenum="29"; 
    this.Remarks = "Rejected."
    this.showaprovedPopup = true;

  }


  async btnSubmitDetails(): Promise<void> {
    try {
      debugger;
      if (this.Remarks == "" || this.Remarks == undefined || this.Remarks == null) {
        this.toast.info("Please Enter Remarks");
        return;
      }

      this.spinner.show();
      const req = {
        type: this.typenum,
         
        num1: this.num1, 
        meeting_id: this.MEETING_ID,
        inserted_by: this.session.userName,
        unique_id: this.session.uniqueId,
        char1: this.Remarks,
        char2:this.message,  
      };

      this.spinner.show();
      const res = await this.stateapi.TrainingDetails_approvals(req);
debugger;
      if (res.success) { 
         this.spinner.hide(); this.showaprovedPopup = false;
        if (this.num1 == "2") { 
        if(res.result[0].STATUS == "1"){
          this.toast.success("Details Approved Successfully ... !");
          setTimeout(() => {  
                    window.location.reload(); 
            }, 2000);
        }
         else if(res.result[0].STATUS == "2")  
          this.toast.error(res.result[0].message);
        else    
          this.toast.error(res.result[0].message);
          return; 
        } 
       else if (this.num1 == "3") { 
          this.spinner.hide();
          this.showaprovedPopup = false;
        if(res.result[0].STATUS == "1") { 
          this.toast.error(" Details Rejected Successfully ... !");
          setTimeout(() => {  
                    window.location.reload(); 
            }, 2000);
        }
        else if(res.result[0].STATUS == "2")  
          this.toast.error(res.result[0].message);
        else    
          this.toast.error(res.result[0].message);
 
          //this.loadReport("0");
          return;
        }
        else if (this.num1 == "4") { 
          this.spinner.hide();
          this.showaprovedPopup = false;
          this.toast.success("Additional Information Request Inserted Successfully ... !");
          
          setTimeout(() => {  
                    window.location.reload(); 
            }, 2000);



          return; 
        }
         else if (this.num1 == "6") {
          this.spinner.hide();
          this.showaprovedPopup = false;
          this.toast.success("Resubmitted Application Approved Successfully ... !"); 

           
          setTimeout(() => {  
                    window.location.reload(); 
            }, 2000);

          return; 
        }
        //  else if (res.result[0].STATUS == "6") {
        //   this.spinner.hide();
        //   this.showaprovedPopup = false;
        //   this.toast.infoNavigateSuccess("Resubmitted Application Rejected Successfully ... !"); 
        //   return; 
        // }

        else {
          this.toast.info("Data Not Submitted Please Try Again  ...!");
          this.spinner.hide();
        }




      } else {
        this.toast.info(res.message);
        this.spinner.hide();
      }
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  // async btnPdfView(pdf): Promise<void> {
  //   try {
  //     this.spinner.show();
  //     const res = await this.utils.viewPDF(pdf);

  //    // this.utils.downloadPdfFile(res.result,pdf);
  //     // if (res.success) {
  //     //   this.utils.downloadPdfFile(res.result,pdf);
  //     //  // this.utils.viewPDF(res.result);
  //     //   // let signedByPdf = 'data:application/pdf, ' + res.result;
  //     //   // window.open(signedByPdf, '_blank');
  //     // } else {
  //     //   this.toast.info(res.message);
  //     // }
  //     this.spinner.hide();
  //   } catch (error) {
  //     this.spinner.hide();
  //     this.utils.catchResponse(error);
  //   }
  // }

  // async btnPDF(): Promise<void> {
  //     try {
  //         const req = {
  //             fromDate: this.fromDate,
  //             toDate: this.toDate, uidNumber: this.session.districtId,
  //         };
  //         const fileName = 'Society Monitoring Report';
  //         let basePDF = '';
  //         this.spinner.show();
  //         const res = await this.vvFarmerAPI.vvFarmerDataStatePDFReport(req);
  //         if (res.success) {
  //             basePDF = res.result;
  //             this.utils.downloadPdfFile(basePDF, fileName);
  //         } else {
  //             this.toast.info(res.message);
  //         }
  //         this.spinner.hide();
  //     } catch (error) {
  //         this.spinner.hide();
  //         this.utils.catchResponse(error);
  //     }
  // }
  searchQuery: any;
  searchQuery_one: any;
  searchQuery_two: any;

  applyFilter() {
    this.filterdata = this.jobDetailsList.filter((item: any) => {
      for (const key in item) {
        if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

  }

  applyFilterone() {
    this.filterdata_one = this.jobDetailsListA.filter((item: any) => {
      for (const key in item) {
        if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery_one.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

  }
  applyFiltertwo() {
    this.filterdata_two = this.jobDetailsListR.filter((item: any) => {
      for (const key in item) {
        if (item.hasOwnProperty(key) && String(item[key]).toLowerCase().includes(this.searchQuery_two.toLowerCase())) {
          return true;
        }
      }
      return false;
    });

  }


  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
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
 exportTable_ToPDF(table_id: any, filename: any): void {

      this.utils.exportTableToPDF(table_id, filename);
  }


//    async exportTable_ToPDF(table_id: any, filename: any): Promise<void> {
//         try { debugger;
//             const req = {
//                 // districtId: this.districtId,
//                 // fromDate: this.fromDate,
//                 // toDate: this.toDate,
//                 MASTER_ID:this.id,
//                 type: "31",
//                 FISRT_NAME:filename,
// STATUS:this.jobnotification
//             };
//             // const fileName = 'districtLevelAmcuLandAllotment';
//               let basePDF = '';
//             this.spinner.show();
//              const res =null;
//             //  await this.stateapi.GetJobDetails_crystalrpt(  req  );
//             debugger;
//             if (res.success) {
//                 basePDF = res.result;
//                 this.utils.downloadPdfFile(basePDF, filename);
//             } else {
//                 this.toast.info(res.message);
//             }
//             this.spinner.hide();
//         } catch (error) {
//             this.spinner.hide();
//             this.utils.catchResponse(error);
//         }
//     }



  exportTable_ToPDF1(table_id: any, filename: any): void {
    

       this.utils.exportTableToPDF(table_id, filename);
     // this.utils.exportTableToPDFandexcludecolumns(table_id, filename, [9,10,11,12,13,14],['EDUCATION CERTIFICATE','RESUME','UPLOAD_DCNTS_SSC', 'UPLOAD_DCNTS_DIPL','UPLOAD_DCNTS__GRDN_DEGREE','UPLOAD_DCNTS__GRDN_PG','CV_UPLOAD_FRES','CV_UPLOAD_EXP','EXPERIENCE_LTR_UPLOAD_EXP','STATUS','ACTION']);

  // const doc = new jsPDF({
  //   orientation: 'landscape',
  //   unit: 'pt',
  //   format: [1684, 1190],
  // });

  // if (!this.jobDetailsList || this.jobDetailsList.length === 0) {
  //   console.warn('No data to export');
  //   return;
  // }

  // // ❌ Columns to remove
  // const excludedColumns = ['UPLOAD_DCNTS_SSC', 'UPLOAD_DCNTS_DIPL','UPLOAD_DCNTS__GRDN_DEGREE','UPLOAD_DCNTS__GRDN_PG','CV_UPLOAD_FRES','CV_UPLOAD_EXP','EXPERIENCE_LTR_UPLOAD_EXP'];

  // // ✅ Final columns to keep
  // const headers = Object.keys(this.jobDetailsList[0]).filter(key => !excludedColumns.includes(key));

  // // ✅ Prepare filtered rows
  // const rows = this.jobDetailsList.map(emp =>
  //   headers.map(key => emp[key])
  // );

  //  //const headers = this.getTableHeaders(table);
  //           //  const rows = this.getTableRows(table);
  //          //   const footers = this.getTableFooters(table);
  
  //             // Use jsPDF's autoTable plugin to generate the PDF
  //             autoTable(doc, {
  //                 head: [headers],
  //                 body: rows,
  //                 //foot: footers,
  //                 theme: 'grid',
  //                 styles: { halign: 'center' },
  //                 headStyles: {
  //                     fillColor: [0, 150, 136],   // PrimeNG theme color
  //                     textColor: [255, 255, 255], // White text
  //                     lineColor: [0, 0, 0],       // Black line color for header borders
  //                     lineWidth: 0.75,            // Set the thickness of the line
  //                 },
  //             });


  // doc.setFontSize(20);
  // doc.text('jobDetailsList   (Selected Columns)', 40, 40);

  // // autoTable(doc, {
  // //   head: [headers],
  // //   body: rows,
  // //   startY: 60,
  // //   margin: { left: 40, right: 40 },
  // //   styles: {
  // //     fontSize: 12,
  // //     cellPadding: 6,
  // //   },
  // //   theme: 'grid',
  // // });

  // doc.save('jobDetailsList.pdf');
 
  
  }

  exportTable_toexcel(table_id: any, filename: any): void {
    
    this.utils.exportTableToExcel(table_id, filename);
  }



  //  async btnPdfView(pdf): Promise<void> {
  //   try {
  //     this.spinner.show();
  //     const res = await this.utils.DMSFileDownload(pdf);
  //     if (res.success) {
  //       //this.utils.downloadPdf(res.result,pdf);
  //        this.utils.viewPDF(res.result);
  //       // let signedByPdf = 'data:application/pdf, ' + res.result;
  //       // window.open(signedByPdf, '_blank');
  //     } else {
  //       this.toast.info(res.message);
  //     }
  //     this.spinner.hide();
  //   } catch (error) {
  //     this.spinner.hide();
  //     this.utils.catchResponse(error);
  //   }
  // }
}
  