import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FormComponent } from './form/form.component';
import { LabSpacesComponent } from './lab-spaces/lab-spaces.component';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'form', component: FormComponent },
  { path: 'labspaces', component: LabSpacesComponent },
  { path: 'conocemas', component: ConoceMasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
