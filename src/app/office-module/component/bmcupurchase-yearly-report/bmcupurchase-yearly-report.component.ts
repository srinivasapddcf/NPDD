
import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
//import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

 
import { FormsModule } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router"; 
import { NgxSpinnerService } from "ngx-spinner"; 
import { OfficeserviceService } from "src/app/office-module/services/officeservice.service";
import { SessionService } from "src/app/shared/services/session.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UtilsService } from "src/app/shared/services/utils.service"; 
import { CommonModule } from '@angular/common';
import { DataTableDirective } from 'angular-datatables';

@Component({
  selector: 'app-bmcupurchase-yearly-report',
  // standalone: true,
  // imports: [DataTablesModule, FormsModule,CommonModule],
  templateUrl: './bmcupurchase-yearly-report.component.html',
  styleUrl: './bmcupurchase-yearly-report.component.css'
})
export class BMCUPurchaseYearlyReportComponent  implements OnInit {
   
      

  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective; 
  dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  dtTrigger: Subject<any> = new Subject(); 
    pendtTrigger: Subject<any> = new Subject();

     
    BMCUList: any[];
constructor(  
   private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router, 
        private utils: UtilsService,  
        private session: SessionService,
         private routes: ActivatedRoute,
        private OfficeModuleAPI:OfficeserviceService
) {   

}
ngOnInit(): void {
  if (this.session.uniqueId != "" && this.session.desigId != "") {
     this.Data_Load();
  }
  else {
      this.router.navigate(['/shared/UnAuthorized']);
  }
}


btnBack(): void {
  const requestData = {
    // districtId: this.districtId,
    // districtName: this.districtName,
    // mandalId: this.mandalId,
    // mandalName: this.mandalName,
    // rbkId: this.rbkId,
    // rbkName: this.rbkName,
    // fromDate: this.fromDate,
    // toDate: this.toDate,
  };

  const result = this.utils.encrypt(JSON.stringify(requestData));

  this.router.navigate(['/MechanicalModule/BmcuPurchaseStatusReport']
    //, {    queryParams: { request: result },  }
);
}

async btnAllPdf(pdf,filename:any,invno:any): Promise<void> {
  try {  
    this.spinner.show();
    const res = await this.utils.EQUIPMENT_DETAILSFileDownload(pdf);
        if (res.success) {
          this.utils.downloadPdf(res.result,(filename+invno)); 
        } else {
          this.toast.warning(res.message);
        }
    this.spinner.hide();
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
}


// btnGetDetails(cnt): void { 
//   
//   this.session.screen = "BmcuPurchaseReport";
//     //  this.SCREENNAME = "1"; //this.session.screen;
  
//     const requestData = { 
//       nbs:cnt,
//       name:this.session.Screen_Name,
//       //this.nbs=result.nbs;
//     }
  
//       const encryptedString = this.utils.encrypt(JSON.stringify(requestData));
//       this.onDetailsChange.emit(encryptedString);
  
//       this.router.navigate(['/MechanicalModule/BmcuDistrictWiseReport']
//         //, { queryParams: { request: encryptedString }, }
//     );
   
//     }

async Data_Load(): Promise<void> {
 
  try { 
const req={
 TYPE:"2", 
 UNIQUE_ID:this.session.uniqueId,
 ROLE:this.session.desigId,
 INSERTED_BY:this.session.userName 
}; 

this.spinner.show();
const res = await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req); 
this.BMCUList=[];
if (res.success) {  
 this.BMCUList=res.result; } 

else{   
this.toast.warning(res.message);
} 
this.spinner.hide();  

  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
} 


}
