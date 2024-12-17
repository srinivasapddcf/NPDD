import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonComponent } from './components/common/common.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { ScheduleMeetingComponent } from './components/schedule-meeting/schedule-meeting.component';
import { NPDDAttendanceComponent } from './components/npddattendance/npddattendance.component';
 
 
const routes: Routes = [{ 
  path: '',
  component: CommonComponent,
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
      path: 'ScheduleCreationNPDD',
      component: ScheduleMeetingComponent,
    }, 

    {
      path: 'NPDDAttendance',
      component: NPDDAttendanceComponent,
      // canActivate: [AuthGuard],
      // data: {
      //     roles,
      // },
  },

  ]

  
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TrainingModuleRoutingModule { }
  