 
import { NgModule } from '@angular/core'; 
import { Routes, RouterModule } from '@angular/router'; 
import { BmcupurchaseReportComponent } from '../mechanical-module/components/bmcupurchase-report/bmcupurchase-report.component';
import { ApprovalsDetailsComponent } from '../office-module/component/approvals-details/approvals-details.component';
import { ApprovalsReportsComponent } from '../office-module/component/approvals-reports/approvals-reports.component';
import { BmcuEquipmentReportComponent } from '../office-module/component/bmcu-equipment-report/bmcu-equipment-report.component';
import { BMCUApprovalsComponent } from '../office-module/component/bmcuapprovals/bmcuapprovals.component';
import { BMCUDistrictWiseReportComponent } from '../office-module/component/bmcudistrict-wise-report/bmcudistrict-wise-report.component';
import { BMCUPurchaseStatusReportComponent } from '../office-module/component/bmcupurchase-status-report/bmcupurchase-status-report.component';
import { BMCUPurchaseYearlyReportComponent } from '../office-module/component/bmcupurchase-yearly-report/bmcupurchase-yearly-report.component';
import { BudgetFinancialyearsComponent } from '../office-module/component/budget-financialyears/budget-financialyears.component';
import { BudgetslipReportComponent } from '../office-module/component/budgetslip-report/budgetslip-report.component';
import { BudgetstatementComponent } from '../office-module/component/budgetstatement/budgetstatement.component';
import { CommonDynamicMenuComponent } from '../office-module/component/common-dynamic-menu/common-dynamic-menu.component';
import { ComponentDetailsComponent } from '../office-module/component/component-details/component-details.component';
import { ComponentMasterReportComponent } from '../office-module/component/component-master-report/component-master-report.component';
import { ComponentMasterComponent } from '../office-module/component/component-master/component-master.component';
import { ComponentTenderPriceComponent } from '../office-module/component/component-tender-price/component-tender-price.component';
import { DistrictQtyAdditionReportComponent } from '../office-module/component/district-qty-addition-report/district-qty-addition-report.component';
import { ExpenditureReportComponent } from '../office-module/component/expenditure-report/expenditure-report.component';
import { ExpenditureComponent } from '../office-module/component/expenditure/expenditure.component';
import { FarmerDataPushStatusComponent } from '../office-module/component/farmer-data-push-status/farmer-data-push-status.component';
import { FinancialBudgetAmountsComponent } from '../office-module/component/financial-budget-amounts/financial-budget-amounts.component';
import { FinancialYearBudgetReportComponent } from '../office-module/component/financial-year-budget-report/financial-year-budget-report.component';
import { FirmDetailsReportsComponent } from '../office-module/component/firm-details-reports/firm-details-reports.component';
import { FirmRegistrationDetailsComponent } from '../office-module/component/firm-registration-details/firm-registration-details.component';
import { FirmSecurityDepositeComponent } from '../office-module/component/firm-security-deposite/firm-security-deposite.component';
import { FirmSecurityDepositsReportsComponent } from '../office-module/component/firm-security-deposits-reports/firm-security-deposits-reports.component';
import { FirmSecurityDepositsfromtodateReportsComponent } from '../office-module/component/firm-security-depositsfromtodate-reports/firm-security-depositsfromtodate-reports.component';
import { InvoiceApprovalsDetailsComponent } from '../office-module/component/invoice-approvals-details/invoice-approvals-details.component';
import { InvoiceDetailsComponent } from '../office-module/component/invoice-details/invoice-details.component';
import { InvoiceDocumentReportComponent } from '../office-module/component/invoice-document-report/invoice-document-report.component';
import { InvoiceReportComponent } from '../office-module/component/invoice-report/invoice-report.component';
import { InvoicemappingbmcustatusComponent } from '../office-module/component/invoicemappingbmcustatus/invoicemappingbmcustatus.component';
import { InvoicesapproveddetailsreportComponent } from '../office-module/component/invoicesapproveddetailsreport/invoicesapproveddetailsreport.component';
import { LoginWiseComponentsComponent } from '../office-module/component/login-wise-components/login-wise-components.component';
import { MapComponent } from '../office-module/component/map/map.component';
import { NewScreenEntryComponent } from '../office-module/component/new-screen-entry/new-screen-entry.component';
import { NewTenderDetailsComponent } from '../office-module/component/new-tender-details/new-tender-details.component';
import { NominationDetailsComponent } from '../office-module/component/nomination-details/nomination-details.component';
import { NominationReportComponent } from '../office-module/component/nomination-report/nomination-report.component';
import { OfficemenuReportComponent } from '../office-module/component/officemenu-report/officemenu-report.component';
import { OfficemenumoduleComponent } from '../office-module/component/officemenumodule/officemenumodule.component';
import { PaymentDetailsReportComponent } from '../office-module/component/payment-details-report/payment-details-report.component';
import { PaymentDetailsComponent } from '../office-module/component/payment-details/payment-details.component';
import { PoDistrcitQtyChangesReportComponent } from '../office-module/component/po-distrcit-qty-changes-report/po-distrcit-qty-changes-report.component';
import { PoDistrcitQtyChangesComponent } from '../office-module/component/po-distrcit-qty-changes/po-distrcit-qty-changes.component';
import { PoDistrictQtyAdditionComponent } from '../office-module/component/po-district-qty-addition/po-district-qty-addition.component';
import { PoDistrictWiseDetailsComponent } from '../office-module/component/po-district-wise-details/po-district-wise-details.component';
import { PODateWiseSummaryComponent } from '../office-module/component/podate-wise-summary/podate-wise-summary.component';
import { PodetailsReportsComponent } from '../office-module/component/podetails-reports/podetails-reports.component';
import { PodetailsComponent } from '../office-module/component/podetails/podetails.component';
import { PODistrctSummaryComponent } from '../office-module/component/podistrct-summary/podistrct-summary.component';
import { PodistrictpercentagesummaryComponent } from '../office-module/component/podistrictpercentagesummary/podistrictpercentagesummary.component';
import { poinvoicedetailsreportComponent } from '../office-module/component/poinvoicedetailsreport/poinvoicedetailsreport.component';
import { POWisePercentagesComponent } from '../office-module/component/powise-percentages/powise-percentages.component';
import { ProceedingDetailsReportComponent } from '../office-module/component/proceeding-details-report/proceeding-details-report.component';
import { ProceedingDetailsComponent } from '../office-module/component/proceeding-details/proceeding-details.component';
import { ProformaInvoiceComponent } from '../office-module/component/proforma-invoice/proforma-invoice.component';
import { QuotationsComponent } from '../office-module/component/quotations/quotations.component';
import { SchedulemeetingReportComponent } from '../office-module/component/schedulemeeting-report/schedulemeeting-report.component';
import { SchedulemeetingComponent } from '../office-module/component/schedulemeeting/schedulemeeting.component';
import { ScreenmenuUpdateComponent } from '../office-module/component/screenmenu-update/screenmenu-update.component';
import { StatelevelBudgetApprovedBMCUReportComponent } from '../office-module/component/statelevel-budget-approved-bmcureport/statelevel-budget-approved-bmcureport.component';
import { StatelevelBudgetApprovedReportComponent } from '../office-module/component/statelevel-budget-approved-report/statelevel-budget-approved-report.component';
import { StatelevelBudgetDetailsReportComponent } from '../office-module/component/statelevel-budget-details-report/statelevel-budget-details-report.component';
import { StockDistrictwisereportComponent } from '../office-module/component/stock-districtwisereport/stock-districtwisereport.component';
import { StockentrydetailsComponent } from '../office-module/component/stockentrydetails/stockentrydetails.component';
import { TenderDetailsEntryComponent } from '../office-module/component/tender-details-entry/tender-details-entry.component';
import { TenderDetailsReportComponent } from '../office-module/component/tender-details-report/tender-details-report.component';
import { TenderDetailsTodayReportComponent } from '../office-module/component/tender-details-today-report/tender-details-today-report.component';
import { TenderPriceReportComponent } from '../office-module/component/tender-price-report/tender-price-report.component';
import { TenderWiseSummaryComponent } from '../office-module/component/tender-wise-summary/tender-wise-summary.component';
import { TendersComponent } from '../office-module/component/tenders/tenders.component';
import { VenderMonthlyProcessReportComponent } from '../office-module/component/vender-monthly-process-report/vender-monthly-process-report.component';
import { VendormonthlyprocessComponent } from '../office-module/component/vendormonthlyprocess/vendormonthlyprocess.component';
import { NPDDAttendanceComponent } from '../training-module/components/npddattendance/npddattendance.component';
import { ScheduleMeetingComponent } from '../training-module/components/schedule-meeting/schedule-meeting.component';
import { CommonComponent } from './components/common/common.component';
import { HomepageComponent } from './components/homepage/homepage.component';
 
 
//const roles = ['10','20','30','40','50','60','70'];
 //const roles = ['10'];
 //if(roles==='10'){}
const routes: Routes = [{ 
  path: '',
  component: CommonComponent,
  // //CommonComponent, CommonDynamicMenuComponent
  children: [ 
    {
      path: '',
      redirectTo: 'Homepage',
      pathMatch: 'full',
    },
    {
      path: 'Homepage',
      component: HomepageComponent,
    },
    {
      path: 'CommonDynamicMenu',  
      component: CommonDynamicMenuComponent,
    },
     
    {
      path: 'DistrictQtyAddition',
      component: PoDistrictQtyAdditionComponent
  },
    {
      path: 'podetails',
      component: PodetailsComponent,
    },
    {
      path: 'FirmDetails',
      component: FirmRegistrationDetailsComponent,
    },

    {
      path: 'ComponentDetails',
      component: ComponentDetailsComponent,
    },
    {
      path: 'FirmSecuirtyDeposites',
      component: FirmSecurityDepositeComponent,
    },
    {
      path: 'FirmSecurityDeposites',
      component: FirmSecurityDepositeComponent,
    },
    

    {
      path: 'TenderDetailsReports',
      component: TenderDetailsTodayReportComponent,
    },

     
    {
      path: 'PODetailsReport', 
      component: PodetailsReportsComponent, 
    },
    
    
    {
      path: 'loginwisecomponents',
      component: LoginWiseComponentsComponent,
    },

    {
      path: 'FirmDetailsReport',
      component: FirmDetailsReportsComponent,
    },
    {
      path: 'FirmSecuDepositReport',
      component: FirmSecurityDepositsReportsComponent,
    },
    
    {
      path: 'FirmSecuDepositFromTodateReport',
      component: FirmSecurityDepositsfromtodateReportsComponent,
    },

    {
      path: 'InvoiceDetails',
      component: InvoiceDetailsComponent,
    },
     
 
    {
        path: 'PODistrictSummary',
        component: PODistrctSummaryComponent
    },

    
    {
      path: 'PODistrictPercentageSummary',
      component: PodistrictpercentagesummaryComponent
  },

    {
      path: 'ProformaInvoice',
      component: ProformaInvoiceComponent,
    },

    {
      path: 'InvoiceReports',
      component: InvoiceReportComponent,
    },

    
    {
      path: 'ComponentTenderPrice',
      component: ComponentTenderPriceComponent,
    },

    {
      path: 'TenderPriceReport',
      component: TenderPriceReportComponent,
    },

     
    {
      path: 'Budgetstatement',
      component:BudgetstatementComponent  ,
    },

    {
      path: 'BudgetslipReport',
      component:BudgetslipReportComponent  ,
    },
    {
      path: 'FinancialBudgetAmounts',
      component:FinancialBudgetAmountsComponent  ,
    },

    {
      path: 'ProceedingDetails',
      component:ProceedingDetailsComponent  ,
    },

    {
      path: 'ProceedingDetailsReport',
      component:ProceedingDetailsReportComponent  ,
    },

    {
      path: 'PaymentDetails',
      component:PaymentDetailsComponent  ,
    },

    {
      path: 'InvoiceDocumentReport',
      component:InvoiceDocumentReportComponent  ,
    },

    {
      path: 'stockentrydetails',
      component:StockentrydetailsComponent  ,
    },
    
    {
      path: 'schedulemeeting',
      component:SchedulemeetingComponent  ,
    }, 
    {
      path: 'scheduleMeetingReport',
      component:SchedulemeetingReportComponent  ,
    },

    {
      path: 'PaymentDetailsReport',
      component:PaymentDetailsReportComponent  ,
    },


    {
      path: 'ScreenAssignment',
      component:OfficemenumoduleComponent  ,
    },
    
    {
      path: 'officemenuReport',
      component:OfficemenuReportComponent  ,
    },
    {
      path: 'ScreenmenuUpdate',  
      component: ScreenmenuUpdateComponent,
    },
    {
      path: 'StockDistrictwiseReport',  
      component: StockDistrictwisereportComponent,
    },

    {
      path: 'TenderDetailsEntry',  
      component: TenderDetailsEntryComponent, 
    },

    
    {
      path: 'TenderDetails',  
      component: NewTenderDetailsComponent,
    },

    

    {
      path: 'PODistrictwiseDetails',  
      component: PoDistrictWiseDetailsComponent,
    },

    {
      path: 'Tenders',  
      component: TendersComponent,
    },

    {
      path: 'TenderDetailsReport',  
      component: TenderDetailsReportComponent,
    },

    {
      path: 'Budgetfinancialyear',  
      component: BudgetFinancialyearsComponent,
    },

    {
      path: 'ComponentMaster',  
      component: ComponentMasterComponent,
    },

    {
      path: 'ComponentMasterReport',
      component: ComponentMasterReportComponent
  },
  
  {
    path: 'Nomination',
    component: NominationDetailsComponent
},

{
  path: 'NewScreenEntry',
  component: NewScreenEntryComponent
},

{
  path: 'Expenditure',
  component: ExpenditureComponent
},
{
  path: 'Quotations',
  component: QuotationsComponent
},
{
  path: 'ExpenditureReport',
  component: ExpenditureReportComponent
},

{
  path: 'NominationReport',
  component: NominationReportComponent
},

{
  path: 'InvoiceDetailsApprovals',
  component: InvoiceApprovalsDetailsComponent 
},


{
  path: 'InvoiceApprovedDetailsReport',
  component: InvoicesapproveddetailsreportComponent

},
{
  path: 'ApprovalsDetails',
  component: ApprovalsDetailsComponent
},

{
  path: 'ApprovalReports',
  component: ApprovalsReportsComponent
},
{
  path: 'PoDistrictQtyChanges',
  component: PoDistrcitQtyChangesComponent        
},
{
  path: 'podistrictqtychangesreport',
  component: PoDistrcitQtyChangesReportComponent
},

{
  path: 'podistrictqtyAdditionreport',
  component: DistrictQtyAdditionReportComponent
},



{
  path: 'BMCUApproval',
  component: BMCUApprovalsComponent
}, 
{
  path: 'BmcuequipmentReport',
  component: BmcuEquipmentReportComponent
}, 
{
  path: 'FarmerDataPush',
  component: FarmerDataPushStatusComponent
},

{
  path: 'PoWisePercentages',
  component: POWisePercentagesComponent
},
{
  path: 'PODateWiseSummary',
  component: PODateWiseSummaryComponent
},
{
  path: 'TenderWiseSummary',
  component: TenderWiseSummaryComponent
},
{
  path: 'VenderMonthlyProcessReport',
  component: VenderMonthlyProcessReportComponent
},

{
  path: 'VendorMonthlyProccess',
  component: VendormonthlyprocessComponent
},
{
  path: 'DISTRICTBMCUWISEREPORT',
  component: BMCUDistrictWiseReportComponent
}, 

  {
    path: 'FinancialYearBudgetReport',
    component: FinancialYearBudgetReportComponent
},

{
  path: 'ScheduleCreationNPDD',
  component: ScheduleMeetingComponent,
},
{
  path: 'NPDDAttendance',
  component: NPDDAttendanceComponent,
   
},

{
  path: 'StatelevelBudgetReport',
  component: StatelevelBudgetDetailsReportComponent,
   
},

{
  path: 'invoicemappingbmcustatus',
  component: InvoicemappingbmcustatusComponent, 
   
},
{
  path: 'PoBasedInvoiceDetailsReport',
  component: poinvoicedetailsreportComponent,
   
},

{
  path: 'statelevelbudgetapprovedReport',
  component: StatelevelBudgetApprovedReportComponent,
   
},

{
  path: 'statelevelbudgetapprovedBmcuReport',
  component: StatelevelBudgetApprovedBMCUReportComponent,
   
},

{
  path: 'DISTRICTBMCUWISEREPORT',
  component: BMCUDistrictWiseReportComponent
},

{
  path: 'BmcuPurchaseyearlyReport',
  component: BMCUPurchaseYearlyReportComponent
},

  {
    path: 'BmcuPurchaseStatusReport',
    component: BMCUPurchaseStatusReportComponent
},

{
  path: 'BmcuPurchaseReport',
  component: BmcupurchaseReportComponent
},


{
  path: 'MAP',
  component: MapComponent
},
  


  ],   
}];

@NgModule({
  imports: [
    
     RouterModule.forChild(routes)
   ],    
   
  exports: [RouterModule]
})
export class OfficeModuleRoutingModule { }
