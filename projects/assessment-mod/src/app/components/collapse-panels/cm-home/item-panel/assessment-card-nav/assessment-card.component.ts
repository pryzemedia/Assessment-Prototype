import {Component, EventEmitter, Input, Output} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown, faClone, faPlus, faTable, faTasks, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'assessment-card-nav',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './assessment-card.component.html',
  styleUrls: ['./assessment-card.component.css']
})
export class AssessmentCardComponent {

  faChevronDown = faChevronDown;
  faTable = faTable;
  faTasks = faTasks;
  faPlus = faPlus;
  faClone = faClone;
  faTrashAlt = faTrashAlt;

  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() dynamicContent: any[] = []; //Nav tabs dynamic content

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  reportMsgID: string = "";
  reportDataID: string = "";
  tableTabUL: string = "";
  accentBgClass: string = "sms-lt-red-header";  //the accent color for the tab navigation

  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  public updateChart(): void{

  }

  ngOnInit() {
    switch (this.colorTheme) {
      case "purple":
        this.headerClass = "purple-header";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "sms-red-header";
        this.accentBgClass = "sms-lt-red-header";
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
    this.tableTabUL = this.cardID + 'Tab';

    this.updateChart();

  }

}
