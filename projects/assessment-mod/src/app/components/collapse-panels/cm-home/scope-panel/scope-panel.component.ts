import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HierarchyPanelComponent} from "../../hierarchy/hierarchy-panel/hierarchy-panel.component";
import {GenericPanelComponent} from "../../generic/generic-panel/generic-panel.component";
import {buttonList, reportList} from "../../generic/generic-panel/data/panel-options-interface";

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

  ngOnInit(): void{
    this.initReportList();
  }
}
