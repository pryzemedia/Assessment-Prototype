import {Component, Input, ViewChild, OnInit, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartConfiguration, ChartData, ChartEvent, ChartType} from "chart.js";
import {BaseChartDirective, NgChartsModule} from "ng2-charts";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChartBar, faChevronDown } from '@fortawesome/free-solid-svg-icons';



@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {

  faChartBar = faChartBar;
  faChevronDown = faChevronDown;

  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() typeOfContent: string = "list"; // list, graph, table, gauge
  @Input() dynamicContent: any[] = []; // pass json data

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();
  @Output() btn2_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  reportMsgID: string = "";
  reportDataID: string = "";



  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  emitBtn2Action(params: any){
    //Used if ony one button exists
    this.btn2_Action.emit(params);

  }

  ngOnInit(){
    switch (this.colorTheme){
      case "purple":
        this.headerClass= "lt-purple-header";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "red-header";
        break;
      case "lt-red" :
        this.headerClass = "lt-red-header";
        break;
      default:
        this.headerClass = "blue-header";
        break;
    }

    this.reportMsgID = this.cardID + 'Msg';
    this.reportDataID = this.cardID + 'Data';

  }

}
