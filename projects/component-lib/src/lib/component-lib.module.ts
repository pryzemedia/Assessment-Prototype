import { NgModule } from '@angular/core';
import { ComponentLibComponent } from './component-lib.component';
import { TableComponent } from './table/table.component';
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
import { DataPropertyGetterPipePipe } from './table/data-property-getter-pipe/data-property-getter-pipe.pipe';



@NgModule({
  declarations: [
    ComponentLibComponent,
    TableComponent,
    DataPropertyGetterPipePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [
    ComponentLibComponent,
    TableComponent
  ]
})
export class ComponentLibModule { }
