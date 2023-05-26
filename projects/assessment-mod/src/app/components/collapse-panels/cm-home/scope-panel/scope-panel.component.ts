import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HierarchyPanelComponent} from "../../hierarchy/hierarchy-panel/hierarchy-panel.component";
import {GenericPanelComponent} from "../../reusable/generic-panel/generic-panel.component";
import {buttonList, reportList} from "../../data/panel-options-interface";

@Component({
  selector: 'app-scope-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HierarchyPanelComponent, GenericPanelComponent],
  templateUrl: './scope-panel.component.html',
  styleUrls: ['./scope-panel.component.css']
})
export class ScopePanelComponent {
  faChevronDown = faChevronDown;

  reportList: reportList[] = [];
  reportButtons: buttonList[] = [];



  initReportList(): void{
    this.reportList = [
      {
        icon: "faFileWord",
        iconClasses: "me-2 text-decoration-none",
        href: "#",
        linkText: "Countermeasure Risk Analysis"
      },
      {
        icon: "faFilePdf",
        iconClasses: "me-2 text-decoration-none",
        href: "#",
        linkText: "Countermeasure Risk Analysis"
      },
      {
        icon: "faFileExcel",
        iconClasses: "me-2 text-decoration-none",
        href: "#",
        linkText: "Risk Levels- Sorted by Asset"
      },
      {
        icon: "faFileExcel",
        iconClasses: "me-2 text-decoration-none",
        href: "#",
        linkText: "Risk Levels- Sorted by Threat"
      },
      {
        icon: "faFileExcel",
        iconClasses: "me-2 text-decoration-none",
        href: "#",
        linkText: "Risk Levels- Sorted by Vulnerability"
      }
    ];

    this.reportButtons = [
      {
        icon: "",
        btnColor: "btn-blue-fill",
        btnClass: "",
        link: "#",
        btnText: "Quick Reports"
      },
      {
        icon: "",
        btnColor: "btn-blue-fill",
        btnClass: "",
        link: "#",
        btnText: "Analytics Dashboard"
      }
    ]
  }

  reportsBtn1Action(params:any){
    console.log('Button 1 Clicked with parameter passed = ' + params);
  }
  reportsBtn2Action(params:any){
    console.log('Button 1 Clicked with parameter passed = ' + params);
  }
  ngOnInit(): void{
    this.initReportList();
  }
}