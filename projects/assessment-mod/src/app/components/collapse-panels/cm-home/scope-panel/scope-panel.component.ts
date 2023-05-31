import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HierarchyPanelComponent} from "../../hierarchy/hierarchy-panel/hierarchy-panel.component";
import {GenericPanelComponent} from "../../reusable/generic-panel/generic-panel.component";
import {buttonList, reportList} from "../../data/panel-options-interface";
import {BarChartComponent} from "../../reusable/chart-panel/bar-chart/bar-chart.component";
import {ChartData, ChartDataset} from "chart.js";


@Component({
  selector: 'app-scope-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HierarchyPanelComponent, GenericPanelComponent, BarChartComponent],
  templateUrl: './scope-panel.component.html',
  styleUrls: ['./scope-panel.component.css']
})
export class ScopePanelComponent {
  faChevronDown = faChevronDown;

  reportList: reportList[] = [];
  reportButtons: buttonList[] = [];
  programButtons: buttonList[] = [];

  setBarChartData: ChartDataset[] = [];
  setBarChartLabels: string[] = [];

  //Bar Chart Example
  /*barChartDataSettings: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: '', backgroundColor: [] }
    ]
  };

  barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [ 2255, 1324, 1004, 839, 1856 ], label: '2023 Data', backgroundColor: ["red", "green", "blue", "orange", "brown" ] }
    ]
  };*/

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
        link: "",
        btnText: "Quick Reports"
      },
      {
        icon: "",
        btnColor: "btn-blue-fill",
        btnClass: "",
        link: "",
        btnText: "Analytics Dashboard"
      }
    ];

    this.programButtons = [
      {
        icon: "",
        btnColor: "btn-blue-fill",
        btnClass: "",
        link: "",
        btnText: "View Details"
      }
    ];

    // ChartJS Bar data
    this.setBarChartData = [
      { data: [ 2255, 1324, 1004, 839, 1856 ], label: '2023 Data', backgroundColor: ['#DB0000', '#00851B', '#1406DB', '#C77400', '#C73C00'] }
    ];
    this.setBarChartLabels = [ 'January', 'February', 'March', 'April', 'May'];
    /*this.barChartDataSettings.labels = [ 'January', 'February', 'March', 'April', 'May'];
    this.barChartDataSettings.datasets[0].data = [ 2255, 1324, 1004, 839, 1856 ];
    this.barChartDataSettings.datasets[0].label = '2023 Data';
    this.barChartDataSettings.datasets[0].backgroundColor = ["red", "green", "blue", "orange", "brown" ];

     */

  }

  reportsBtn1Action(params:any){
    console.log('Reports Button 1 Clicked with parameter passed = ' + params);
  }
  reportsBtn2Action(params:any){
    console.log('Reports Button 2 Clicked with parameter passed = ' + params);
  }

  programBtn1Action(params:any){
    console.log('Program Button 1 Clicked with parameter passed = ' + params);
  }

  ngOnInit(): void{
    this.initReportList();
  }
}
