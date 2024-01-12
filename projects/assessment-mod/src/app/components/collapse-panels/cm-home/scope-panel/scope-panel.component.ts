import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import {HierarchyPanelComponent} from "../../hierarchy/hierarchy-panel/hierarchy-panel.component";
import {GenericPanelComponent} from "../../../reusable/chart-panel/generic-panel/generic-panel.component";
import {buttonList, cardList, reportList} from "../../data/panel-options-interface";
import {BarChartComponent} from "../../../reusable/chart-panel/bar-chart/bar-chart.component";
import {ChartDataset} from "chart.js";
import {PieChartPanelComponent} from "../../../reusable/chart-panel/pie-chart-panel/pie-chart-panel.component";
import {CollapsePanelComponent} from "../../collapse-panels.component";
import {
  CdkDrag,
  CdkDragDrop,
  CdkDragHandle,
  CdkDragPlaceholder,
  CdkDropList, CdkDropListGroup,
  moveItemInArray,
  transferArrayItem
} from "@angular/cdk/drag-drop";
import {FormsModule} from "@angular/forms";
import {AssessmentCardComponent} from "../item-panel/assessment-card-nav/assessment-card.component";
import {MatIconModule} from "@angular/material/icon";


export interface DragComponent {
  type: string;
  columnClass: string;
}


@Component({
  selector: 'app-scope-panel',
  standalone: true,
  imports: [CommonModule,
    FontAwesomeModule,
    HierarchyPanelComponent,
    GenericPanelComponent,
    BarChartComponent,
    PieChartPanelComponent,
    AssessmentCardComponent,
    FormsModule,
    CollapsePanelComponent,
    CdkDrag,
    CdkDragHandle,
    CdkDropList,
    CdkDropListGroup,
    CdkDragPlaceholder, MatIconModule],
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

  setCardList: cardList[] = [];



  //Drag and Drop components object
  components1:DragComponent[] = [
    {type: 'app-hierarchy panel', columnClass: 'col-lg-6'},
    {type: 'reports-generic panel', columnClass: 'col-lg-6'},
    {type: 'assessment-bar-chart', columnClass: 'col-lg-4'},
    {type: 'assessment-pie-chart', columnClass: 'col-lg-4'},
    {type: 'compliance-pie-chart', columnClass: 'col-lg-4'},
    {type: 'risk-bar-chart', columnClass: 'col-lg-4'}

  ];

  components2:DragComponent[] = [
    {type: 'assessment-card-table', columnClass: 'col'}
  ];

  allComponents:DragComponent[] = [...this.components1, ...this.components2]

  componentsList1:string[] = this.components1.map(component => component.type);
  componentsList2:string[] = this.components2.map(component2 => component2.type);

  onDrop(event: CdkDragDrop<string[]>,section: string): void {
    console.log("event.previousContainer = " + event.previousContainer.data);
    console.log("event.container = " + event.container.data);
    //moveItemInArray(this.components, event.previousIndex, event.currentIndex);

    console.log("section = " + section);
   // console.log("event.previousContainer = " + event.previousContainer.data + " ||||| event.container = " + event.container.data)
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      // Update components1 or components2 order based on section
      /*if (section === 'section1') {
        this.components1 = this.updateComponentsOrder(this.components1, this.componentsList1);
      } else if (section === 'section2') {
        this.components2 = this.updateComponentsOrder(this.components2, this.componentsList2);
      }
      console.log("event.container.data = " + event.container.data);*/
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,

      );

     //console.log("this.components1 = " + JSON.stringify(this.components1, null, 2));
      //console.log("this.components2 = " + JSON.stringify(this.components2, null, 2));

      // Update components1 and components2 order based on sections
      /*if(section=="section2"){
        this.components1 = this.updateComponentsOrder(this.components1, event.previousContainer.data);
        this.components2 = this.updateComponentsOrder(this.components2, event.container.data);
      }*/
      //this.components1 = this.updateComponentsOrder(this.components1, this.componentsList1);
      //this.components2 = this.updateComponentsOrder(this.components2, this.componentsList2);

    }

    this.updateComponents();
    console.log("container.data = " + event.container.data);
    console.log("this.components1 = " + JSON.stringify(this.components1, null, 2));
    console.log("this.components2 = " + JSON.stringify(this.components2, null, 2));
    //console.log("this.components2 = " + JSON.stringify(this.components2, null, 2));
    console.log("section = " + section);
    // Update components1 or components2 order based on section
    /*if (section === 'section1') {
      this.components1 = this.updateComponentsOrder(this.components1, this.componentsList1);
      console.log("this.components1 = " + JSON.stringify(this.components1, null, 2));
    } else if (section === 'section2') {
      this.components2 = this.updateComponentsOrder(this.components2, this.componentsList2);
      console.log("this.components2 = " + JSON.stringify(this.components2, null, 2));
    }*/

  }

  updateComponents() {
    // Combine components1 and components2 into allComponents
    this.allComponents = [...this.components1, ...this.components2];
    // Reset components1 and components2
    this.components1 = [];
    this.components2 = [];

    // Rebuild components1 and components2 based on componentsList1 and componentsList2
    for (let type of this.componentsList1) {
      let component = this.allComponents.find(component => component.type === type);
      if (component) {
        this.components1.push(component);
      }
    }

    for (let type of this.componentsList2) {
      let component = this.allComponents.find(component => component.type === type);
      if (component) {
        this.components2.push(component);
      }
    }
  }

  updateComponentsOrder(components: any[], orderList: string[]): DragComponent[] {
    console.log()
    return orderList.map(type => components.find(component => component.type === type));
  }

  onColumnClassChange(): void {
    // Optionally add logic here if needed
  }

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
    /*this.componentsList1 = this.components.map(component => component.type);
    this.componentsList2 = this.components2.map(component2 => component2.type);
    console.log("componentsList1 = " + this.componentsList1);*/
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

    this.setCardList = [
      {
        cardID : "assessments01",
        tabText : "Assessments",
        cardTitle : "Assessments",
        cardText : "Here is where you can create, clone and delete assessments.  Double click to open or edit an assessment.",
        iconColorClass : "text-purple",
        firstCardOnly: "show active",
        firstLinkOnly: "active"
      }
    ]
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
