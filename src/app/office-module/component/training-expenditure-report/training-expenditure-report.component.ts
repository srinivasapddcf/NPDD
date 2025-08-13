import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoggerService } from 'src/app/shared/services/logger.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
//import { StateService } from '../../services/state.service';
import { TableModule } from 'primeng/table';
import { CommonModule } from '@angular/common';
import { OfficeserviceService } from '../../services/officeservice.service';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-training-expenditure-report',
  standalone: true,
  imports: [CommonModule, TableModule,FormsModule],
  templateUrl: './training-expenditure-report.component.html',
  styleUrl: './training-expenditure-report.component.css'
})
export class TrainingExpenditureReportComponent {
RegDetails = []; districtId: any;jobDetailsList = [];
Speakers=false;Participants=false;Documents=false;Expenditure=false;All=false;
  input: any;
  constructor(
    private spinner: NgxSpinnerService,
    private toast: ToasterService,
    //private StateApi: StateService,
    private utils: UtilsService,
    private logger: LoggerService,
    private route: ActivatedRoute,
    private router: Router,
    private session: SessionService,
    private OfficeModuleAPI: OfficeserviceService,
  ) {

  }

  reportTotals = {
    S_NO: '-',
    DIST_NAME: 'TOTAL',
    AD_USERNAME: '',
    AD_NAME: '',
    AD_MOBILE: '',
    AD_LAST_LOGIN: '',
    VAS_USERNAME: '',
    VAS_NAME: '',
    VAS_MOBILE: '',
    VAS_LAST_LOGIN: '',
    TOTAL_VILLAGES_ADDED: 0,
    APPROVED_VILLAGES: 0,
    PENIDNG_VILLAGES: 0,
    REJECTED_VILLAGES: 0,
    VILLAGES__AHA: 0,
    TOTAL_AHAS: 0,
    TOTAL_AHA_LOGINS: 0,
    AHA_LOGED_IN: 0,
    AHA_NOTLOGED_IN: 0,
    AHAS_VILLAGES: 0,
    AHAS_NOTVILLAGES: 0,
    DATA_SUB_AHAS: 0,
    TOT_FARMERS: 0,
    PENDING_FARMERS: 0,
    REG_FARMERS: 0,
  };
   
  ngOnInit(): void {


    if (this.session.uniqueId != "" && this.session.desigId != "" ||
      this.session.uniqueId != null && this.session.desigId != null ||
      this.session.uniqueId != undefined && this.session.desigId != undefined
    ) {
      
    }
    else {
      this.router.navigate(['/shared/UnAuthorized']);
    }
  }
  
async GODetails(): Promise<void> {
  try {
     this.loadReport();
  } catch (error) {
    this.spinner.hide();
    this.utils.catchResponse(error);
    
  }
}
  async loadReport(): Promise<void> {
    try { debugger;

if(this.Speakers==false && this.Participants==false && this.Documents==false && this.Expenditure==false && this.All==false) {
        this.toast.warning("Please select at least one option to generate report");return;
}

    

      this.spinner.show(); 
      const req = {
              type: "36",//
               num1: 1, 
              char1: this.Speakers ? '1' : '0',
              char2: this.Participants ? '1' : '0', 
              char3: this.Documents ? '1' : '0',
              char4: this.Expenditure ? '1' : '0',
              char5: this.All ? '1' : '0',

              UNIQUEID: this.session.uniqueId,
              ROLE: this.session.desigId,
              INSERTEDBY: this.session.userName,
              
          }; 
        
          
          
          
          this.spinner.show(); //MDSS_NEW_TRAINING_EXP_DTS
          const res = await this.OfficeModuleAPI.TrainingDetails_ID(req);


      if (res.success) {
        this.jobDetailsList = res.result;

        // for (let i = 0; i < this.RegDetails.length; i++) {
        //   this.reportTotals.TOTAL_VILLAGES_ADDED += parseInt(this.RegDetails[i].TOTAL_VILLAGES_ADDED);
        //   this.reportTotals.APPROVED_VILLAGES += parseInt(this.RegDetails[i].APPROVED_VILLAGES);
        //   this.reportTotals.PENIDNG_VILLAGES += parseInt(this.RegDetails[i].PENIDNG_VILLAGES);
        //   this.reportTotals.REJECTED_VILLAGES += parseInt(this.RegDetails[i].REJECTED_VILLAGES);
        //   this.reportTotals.VILLAGES__AHA += parseInt(this.RegDetails[i].VILLAGES__AHA);
        //   this.reportTotals.TOTAL_AHAS += parseInt(this.RegDetails[i].TOTAL_AHAS);
        //   this.reportTotals.TOTAL_AHA_LOGINS += parseInt(this.RegDetails[i].TOTAL_AHA_LOGINS);
        //   this.reportTotals.AHA_LOGED_IN += parseInt(this.RegDetails[i].AHA_LOGED_IN);
        //   this.reportTotals.AHA_NOTLOGED_IN += parseInt(this.RegDetails[i].AHA_NOTLOGED_IN);
        //   this.reportTotals.AHAS_VILLAGES += parseInt(this.RegDetails[i].AHAS_VILLAGES);
        //   this.reportTotals.AHAS_NOTVILLAGES += parseInt(this.RegDetails[i].AHAS_NOTVILLAGES);
        //   this.reportTotals.DATA_SUB_AHAS += parseInt(this.RegDetails[i].DATA_SUB_AHAS);
        //   this.reportTotals.TOT_FARMERS += parseInt(this.RegDetails[i].TOT_FARMERS);
        //   this.reportTotals.PENDING_FARMERS += parseInt(this.RegDetails[i].PENDING_FARMERS);
        //   this.reportTotals.REG_FARMERS += parseInt(this.RegDetails[i].REG_FARMERS);
        // }
      }
      else {
        this.toast.info(res.message);
      }
      // this.rerender();
      this.spinner.hide();
    } catch (error) {
      this.spinner.hide();
      this.utils.catchResponse(error);
    }
  }

  exportTable_ToPDF(table_id: any, filename: any): void {
    
    this.utils.exportTableToPDF(table_id, filename);
  }

  exportTable_toexcel(table_id: any, filename: any): void {
    
    this.utils.exportTableToExcel(table_id, filename);
  }

 

 onchkSelect(event: any,id :any) {
  const checked = event.target.checked;
  debugger;
  if (checked) {
if(this.Speakers === true && this.Participants === true && this.Documents === true && this.Expenditure === true) { this.All === true  } else { this.All = false; }
   
    // Do your add logic here
  } else {
    if(this.Speakers === true && this.Participants === true && this.Documents === true && this.Expenditure === true) { this.All === true  } else { this.All = false; }
  }
}

  onallSelect(event: any) {
  const checked = event.target.checked;
  
  if (checked) {
    this.Speakers = true;
    this.Participants = true; 
    this.Documents = true;
    this.Expenditure = true;
     console.log('Checked:');
    // Do your add logic here
  } else {
    this.Speakers = false;
    this.Participants = false;  
    this.Documents = false;
    this.Expenditure = false;
    console.log('Unchecked:');
    // Do your remove logic here
  }
}



}