import { Component, OnInit } from '@angular/core';
import { BMCUPurchaseStatusReportComponent } from "../../../office-module/component/bmcupurchase-status-report/bmcupurchase-status-report.component";
import { ActivatedRoute, Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service';
import { BMCUPurchaseYearlyReportComponent } from "../../../office-module/component/bmcupurchase-yearly-report/bmcupurchase-yearly-report.component";

@Component({
  selector: 'app-bmcupurchase-report',
  // standalone: true,
  // imports: [BMCUPurchaseStatusReportComponent, BMCUPurchaseYearlyReportComponent],
  templateUrl: './bmcupurchase-report.component.html',
  styleUrl: './bmcupurchase-report.component.css'
})
export class BmcupurchaseReportComponent implements OnInit {
  SCREENNAME='';name=''


  input: any;

  nbs:any;     // No of BMCUs Supplied
  nbr:any;     // No of BMCUs Recevived
  nbitc:any;   // No of BMCUs Installed & Trail Runs Completed
  nbtitc:any;  // No of BMCUs to be Installed & Trail Runs Completed
  nbtr:any;    // No of BMCUs to be Received

    districtId: any;
    type: any;
    districtName: any;
    BmcuText: any;

constructor(private spinner: NgxSpinnerService,
    private utils: UtilsService, 
    private router: Router,
    private toast: ToasterService,
    private routes: ActivatedRoute,
    private session: SessionService,     
    ) { //routes.queryParams.subscribe((params) => (this.input = params['request'])); 

    }
  ngOnInit(): void {



    
    if(this.session.screen == "BmcuPurchaseReport"){ // this.SCREENNAME = this.SCREENNAME === '1' ? '2' : '1';
         this.SCREENNAME = "1"; //this.session.screen;
         this.name=this.session.Screen_Name;
    }
   else if(this.session.screen == "BmcuPurchaseyearlyReport"){ // this.SCREENNAME = this.SCREENNAME === '1' ? '2' : '1';
      this.SCREENNAME = "0"; //this.session.screen;
      this.name=this.session.Screen_Name;
      }
else
this.router.navigate(['/MechanicalModule/Homepage']);

  }
 



  onDetailsChange(result): void { 
    this.session.screen = "BmcuPurchaseyearlyReport";
    this.SCREENNAME = "0"; //this.session.screen;
    this.name=this.session.Screen_Name;
   // this.nbs=result.nbs;



    this.router.navigate(['/BmcuPurchaseReport'], {
        queryParams: { request: result },
    });

}

}
