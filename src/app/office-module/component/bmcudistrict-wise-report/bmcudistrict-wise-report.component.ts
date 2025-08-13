import { Component, OnInit, ViewChild } from '@angular/core';
import { DataTableDirective, DataTablesModule } from 'angular-datatables';
import { Subject } from 'rxjs';

 
import { FormsModule } from "@angular/forms";
import { Router } from "@angular/router"; 
import { NgxSpinnerService } from "ngx-spinner"; 
import { OfficeserviceService } from "src/app/office-module/services/officeservice.service";
import { SessionService } from "src/app/shared/services/session.service";
import { ToasterService } from "src/app/shared/services/toaster.service";
import { UtilsService } from "src/app/shared/services/utils.service"; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bmcudistrict-wise-report',
  // standalone: true,
  //   imports: [DataTablesModule, FormsModule,CommonModule  ],
  templateUrl: './bmcudistrict-wise-report.component.html',
  styleUrl: './bmcudistrict-wise-report.component.css'
})
export class BMCUDistrictWiseReportComponent implements OnInit {


  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective; 
  // dtOptions: DataTables.Settings = this.utils.dataTableOptions();
  // dtTrigger: Subject<any> = new Subject(); 
    pendtTrigger: Subject<any> = new Subject();

    dtOptions: DataTables.Settings = {};
    dtTrigger: Subject<any> = new Subject();
id:any; BMCUList: any[];
constructor(  
   private spinner: NgxSpinnerService,
        private toast: ToasterService,
        private router: Router, 
        private utils: UtilsService,  
        private session: SessionService,
        private OfficeModuleAPI:OfficeserviceService
) { }
ngOnInit(): void {
  this.id=0;
  if (this.session.uniqueId != "" && this.session.desigId != "") {
    this.Data_Load();
    if(this.session.screen != "")
        this.id=this.session.screen;
 
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

async Data_Load(): Promise<void> {
 
  try { 
const req={
 TYPE:"3", 
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

btnGetDetails(cnt): void { 

  this.session.screen=cnt
  if(cnt=="1")
  this.router.navigate(['/MechanicalModule/BmcuPurchaseyearlyReport']);
  // if(cnt!=="1")
  //   this.router.navigate(['/MechanicalModule/DISTRICTBMCUWISEREPORT']);


}
}
 