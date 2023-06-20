import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HierarchyPanelComponent} from "../../hierarchy/hierarchy-panel/hierarchy-panel.component";
import {GenericPanelComponent} from "../../../reusable/chart-panel/generic-panel/generic-panel.component";
import {buttonList, reportList} from "../../data/panel-options-interface";
import {BarChartComponent} from "../../../reusable/chart-panel/bar-chart/bar-chart.component";
import {ChartDataset} from "chart.js";
import {PieChartPanelComponent} from "../../../reusable/chart-panel/pie-chart-panel/pie-chart-panel.component";


@Component({
  selector: 'app-scope-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, HierarchyPanelComponent, GenericPanelComponent, BarChartComponent, PieChartPanelComponent],
  templateUrl: './scope-panel.component.html',
  styleUrls: ['./scope-panel.component.css']
})
export class ScopePanelComponent implements OnInit{
  faChevronDown = faChevronDown;

  reportList: reportList[] = [];
  reportButtons: buttonList[] = [];
  programButtons: buttonList[] = [];
  statusButtons: buttonList[] = [];

  setBarChartData: ChartDataset[] = [];
  setBarChartLabels: string[] = [];

  setPieChartData_01: ChartDataset[] = [];
  setPieChartLabels_01: string[] = [];

  setPieChartData_02: ChartDataset[] = [];
  setPiChartLabels_02: string[] = [];

  setBarChartData_02: ChartDataset[] = [];
  setBarChartLabels_02: string[] = [];

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

    this.statusButtons = [
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
    this.setPieChartData_01 = [
      { data: [340, 332, 23, 100], label: 'Assessment Status', backgroundColor: ['#1406DB', '#00851B', '#DB0000', '#FEA120']}
    ];
    this.setPieChartLabels_01 = ['Conducted', 'Approved', 'Overdue', 'Not Adequate']  ;

    this.setPieChartData_02 = [
      { data: [23, 20, 15, 9], label: 'Compliant', backgroundColor: ['#DB0000', '#00851B', '#1406DB', '#FEA120']}
    ]
    this.setPiChartLabels_02 = ["AAA", "BBB", "CCC", "DDD"];

    this.setBarChartData_02 = [
      { data: [23, 20, 9], label: '2023 Data', backgroundColor: ['#DB0000', '#00851B', '#1406DB' ] }
    ]
    this.setBarChartLabels_02 = ["AAA", "BBB", "DDD"];
    /*this.barChartDataSettings.labels = [ 'January', 'February', 'March', 'April', 'May'];


    this.barChartDataSettings.datasets[0].data = [ 2255, 1324, 1004, 839, 1856 ];
    this.barChartDataSettings.datasets[0].label = '2023 Data';
    this.barChartDataSettings.datasets[0].backgroundColor = ["red", "green", "blue", "orange", "brown" ];

     */

  }

  reportsBtn1Action(params:any){
    console.log('Reports Button 1 Clicked with parameter passed = ' + params);
  }
  /*reportsBtn2Action(params:any){
    console.log('Reports Button 2 Clicked with parameter passed = ' + params);
  }*/

  programBtn1Action(params:any){
    console.log('Number of Assessments Button 1 Clicked with parameter passed = ' + params);
  }

  statusBtn1Action(params:any){
    console.log('Assessment Status Button 1 Clicked with parameter passed = ' + params);
  }

  complianceBtn1Action(params:any){
    console.log('Compliance Button 1 Clicked with parameter passed = ' + params);
  }

  riskBtn1Action(params:any){
    console.log('Risk Button 1 Clicked with parameter passed = ' + params);
  }

  ngOnInit(): void{
    this.initReportList();

  }
}
