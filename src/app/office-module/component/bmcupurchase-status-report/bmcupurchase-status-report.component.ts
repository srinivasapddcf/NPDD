 

 
import { Component, OnInit, OnDestroy, AfterViewInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
//import { DataTableDirective } from "angular-datatables";
import { NgxSpinnerService } from "ngx-spinner";
import { Subject } from "rxjs"; 
 
 
import { OfficeserviceService } from "src/app/office-module/services/officeservice.service"; 
 import { DataTableDirective } from 'angular-datatables/src/angular-datatables.directive';
    
 
 
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service'; 

@Component({
  selector: 'app-bmcupurchase-status-report',
  //  standalone: true,
  //  imports: [FormsModule, CommonModule, NgSelectModule, BsDatepickerModule, TableModule, BrowserModule, DataTablesModule ],
   
  templateUrl: './bmcupurchase-status-report.component.html',
  styleUrl: './bmcupurchase-status-report.component.css'
})
export class BMCUPurchaseStatusReportComponent implements OnInit {
 


 @ViewChild(DataTableDirective, { static: false })
dtElement: DataTableDirective; 
dtOptions: DataTables.Settings = this.utils.dataTableOptions();
dtTrigger: Subject<any> = new Subject(); 
pendtTrigger: Subject<any> = new Subject();


BMCUList: any[];
DetailsList: any[]; 
  constructor(  
     private spinner: NgxSpinnerService,
          private toast: ToasterService,
          private router: Router, 
          private utils: UtilsService,  
          private session: SessionService,
          private OfficeModuleAPI:OfficeserviceService
  ) { }

ngOnInit(): void 
{
    if (this.session.uniqueId != "" && this.session.desigId != "")
       { 
        this.Data_Load();
      }
    else 
      {
          this.router.navigate(['/shared/UnAuthorized']);
      }
  } 

  async Data_Load(): Promise<void> {   
    try {              
const req={
            TYPE:"1", 
            UNIQUE_ID:this.session.uniqueId,
            ROLE:this.session.desigId,
            INSERTED_BY:this.session.userName 
          }; 
 
this.spinner.show();
const res = await this.OfficeModuleAPI.BMCU_EQUIPMENT_DETAILS_SELECT(req); 
this.BMCUList=[];
    if (res.success) 
        {  
          this.BMCUList=res.result; 
          this.DetailsList=res.result;
        } 
    
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
    if(cnt!=="1")
      this.router.navigate(['/MechanicalModule/DISTRICTBMCUWISEREPORT']); 
  }



}
