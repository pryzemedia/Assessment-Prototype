import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown, faFileExcel, faFilePdf, faFileWord, faList } from '@fortawesome/free-solid-svg-icons';
import {reportList} from "./data/panel-options-interface";
import {HttpClient, HttpClientModule} from "@angular/common/http";

@Component({
  selector: 'app-generic-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HttpClientModule],
  templateUrl: './generic-panel.component.html',
  styleUrls: ['./generic-panel.component.css']
})
export class GenericPanelComponent {

  faList = faList;
  faChevronDown = faChevronDown;
  faFileWord = faFileWord;
  faFileExcel = faFileExcel;
  faFilePdf = faFilePdf;

  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""
  @Input() typeOfContent: string = "list"; // list, graph, table, gauge
  @Input() dynamicContent: any[] = []; // pass json data

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  headerClass: string = "blue-header";

  constructor (private httpService: HttpClient) { }

  //dynamicContent:any[] = [];

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
    /*this.httpService.get('./assets/json-data/report-list.json').subscribe({
      next: data => {
        this.dynamicContent = data as reportList [];
      }
    })*/
  }

}
