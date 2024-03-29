import {ModuleWithProviders, NgModule, Provider} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AssessmentHomeComponent } from './pages/assessment-home/assessment-home.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { ManageAssessmentComponent } from './pages/manage-assessment/manage-assessment.component';
import {MatIconModule} from "@angular/material/icon";
import { CollectDataComponent } from './pages/collect-data/collect-data.component';
//import { CMHomeComponent } from './pages/cm-home/cm-home.component';
//import { DataPropertyGetterPipe } from './components/reusable/table/data-property-pipe/data-property-getter.pipe';

const providers: Provider[] = [];

@NgModule({
  declarations: [
    AppComponent,
    AssessmentHomeComponent,
    ManageAssessmentComponent,
    CollectDataComponent
    //DataPropertyGetterPipe
    //CMHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    //DataPropertyGetterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

@NgModule({})
export class AssessmentModule{
  static forRoot(): ModuleWithProviders<AppModule> {
    return {
      ngModule: AppModule,
      providers: providers
    }
  }
}
