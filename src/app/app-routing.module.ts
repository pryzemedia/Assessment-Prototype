import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AssessmentHomeComponent} from "../../projects/assessment-mod/src/app/pages/assessment-home/assessment-home.component";
import {CollectDataComponent} from "../../projects/assessment-mod/src/app/pages/collect-data/collect-data.component";
import {CMHomeComponent} from "../../projects/assessment-mod/src/app/pages/cm-home/cm-home.component";

const routes: Routes = [
  { path: 'home', component: CMHomeComponent, pathMatch: 'full'},
  { path: 'collect-data', component: CollectDataComponent, pathMatch: 'full'},
  { path: 'analyze data', component: AssessmentHomeComponent, pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
