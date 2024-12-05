import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoachesComponent } from './coaches/coaches.component';
import { TripComponent } from './trip/trip.component';
import { CustomerComponent } from './customer/customer.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AppComponent } from './app.component';
import { ResumeComponent } from './resume/resume.component';
import { ProjectComponent } from './project/project.component';

const routes: Routes = [
 
  
  {path:"" , component: PortfolioComponent, pathMatch:'full'},   
  {path: "coaches", component: CoachesComponent, pathMatch: 'full'},
  {path: "trip", component: TripComponent, pathMatch: 'full'},
  {path: "customer", component: CustomerComponent, pathMatch: 'full'},
  {path: "contact", component: ContactsComponent },
  {path: "resume", component: ResumeComponent },
  {path: "projects", component: ProjectComponent }
  



  
  ];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
