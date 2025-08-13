import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoginService } from 'src/app/login/services/login.service';
import { OfficeserviceService } from 'src/app/office-module/services/officeservice.service';
import { SessionService } from 'src/app/shared/services/session.service';
import { ToasterService } from 'src/app/shared/services/toaster.service';
import { UtilsService } from 'src/app/shared/services/utils.service'; 

@Component({
  selector: 'app-common',
  templateUrl: './common.component.html',
  styleUrls: ['./common.component.css']
})
export class CommonComponent implements OnInit {

  userName:any;  lastLoginTime: any;  
  menu1list:[];
  constructor(private spinner: NgxSpinnerService,
    private utils: UtilsService, 
    private router: Router,
    private toast: ToasterService,
    private session: SessionService,     
    private loginAPI: LoginService,
    private OfficeModuleAPI: OfficeserviceService,) { } 

  ngOnInit(): void {

    this.lastLoginTime=this.session.lastLoginTime; 
this.userName=this.session.userName;  
    if(this.session.uniqueId !="" && this.session.desigId != "")
    { 
   // this.officemenu1('1','1_1');

    }
  }
 


  
  async officemenu1(  screenid,  menuid) {
    try { 
        const req={
            TYPE:"4",
            LOGIN_UNIQUE_ID: this.session.uniqueId,
            MODULE_TYPE:'0'  ,
            MENUREPORT_TYPE:'1',
            SCREEN_ID:"1",
            SCREEN_STATUS:screenid,
            MENU_STATUS:menuid,
            UNIQUEID:this.session.uniqueId,
            ROLE:this.session.desigId,
            INSERTEDBY:this.session.userName 
          } 
  
      this.spinner.show();
      const res = await this.OfficeModuleAPI.officemenu1(req); 
      this.spinner.hide();  
            if (res.success) { 
              if(screenid=='1') { this.menu1list=[]; this.menu1list=res.result; } 
            } 
            else{
              if(screenid=='1') { this.menu1list=[]; }  
            }

    }
   catch (error) 
   {
    this.spinner.hide();
    this.utils.catchResponse(error);
  }
} 


btnLogout(): void {
  if (confirm('are you sure want to logout ?')) {
    const req = {
      userName: this.userName,
    };

    this.spinner.show();
    this.loginAPI
      .logout(req)
      .then((res: any) => {
        if (res.success) {
          alert(res.message);
          sessionStorage.clear();
          this.session.clearSession();
          //this.router.navigate(['/']);
          this.router.navigate(['/login']);
        } else {
          this.toast.info(res.message);
        }
        this.spinner.hide();
      })
      .catch((error: any) => {
        this.spinner.hide();
        this.utils.catchResponse(error);
      });
  }
}

btnForgetPassword(): void {
  this.utils.updatePassword(this.session.desigId);
}
}
