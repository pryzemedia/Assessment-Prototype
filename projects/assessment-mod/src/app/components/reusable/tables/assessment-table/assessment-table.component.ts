import { Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Assessments} from "./assessments";
import {TableColumn} from "../table-component/TableColumns";
import {Sort} from "@angular/material/sort";
import {TableComponent} from "../table-component/table.component";
import {TableModalComponent} from "../table-component/table-modal/table-modal.component";
import {buttonList} from "../../../collapse-panels/data/panel-options-interface";
import {ButtonGroupingComponent} from "../../buttons/button-grouping/button-grouping.component";


@Component({
  selector: 'app-assessment-table',
  standalone: true,
  imports: [CommonModule, TableComponent, TableModalComponent, ButtonGroupingComponent],
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.css']
})
export class AssessmentTableComponent implements OnInit {
  @ViewChild(TableModalComponent) modalComponent!: TableModalComponent;

  assessmentData: Assessments[] = [];
  assessmentTableColumns: TableColumn[] = [];
  //current assessment wanted to use a different var then selectedAssessment
  public cAssessment: Assessments[] = [];

  crudButtons: buttonList[] = [];

  constructor(
    //private _NgbModal: NgbModal
  ) { }

  sortData(sortParameters: Sort) {
    const keyName = sortParameters.active;
    if (sortParameters.direction === 'asc') {
      // @ts-ignore
      this.assessmentData = this.assessmentData.sort((a: Assessments, b: Assessments) => a[keyName].localeCompare(b[keyName]));
      return this.assessmentData;
    } else if (sortParameters.direction === 'desc') {
      // @ts-ignore
      this.assessmentData = this.assessmentData.sort((a: Assessments, b: Assessments) => b[keyName].localeCompare(a[keyName]));
      return this.assessmentData;
    } else {
      return this.assessmentData = this.getAssessments();
    }
  }

  removeOrder(assessment: Assessments) {
    this.assessmentData = this.assessmentData.filter(item => item.id !== assessment.id);
  }

  openModal(assessment: Assessments) {
    this.cAssessment[0] = assessment;
    console.log("this.cAssessment[0] = " + this.cAssessment[0].name);
    this.modalComponent.updateModalData(assessment);
    for(let i = 0; i < this.assessmentTableColumns.length; i++){
      let modelDiv = document.getElementById((this.assessmentTableColumns[i].name+i));
      if(modelDiv != null){
        modelDiv.innerText = this.cAssessment[0][this.assessmentTableColumns[i].dataKey] as string;
      }
    }
  }


  crudButtonsAction(params:any){
    let clickedBtn: buttonList = params as buttonList;
    console.log('CRUD Button Clicked with parameter passed = ' + clickedBtn.btnText);
  }

  //table button actions for the Assessment Table Component
  createNewAction(params:any){
    console.log('Create New Entry Button Clicked with parameter passed = ' + params);
  }

  cloneNewAction(params:any){
    console.log('Clone New Button Clicked with parameter passed = ' + params);
  }

  deleteSelectedAction(params:any){
    console.log('Delete Selection Button Clicked with parameter passed = ' + params);
  }

  ngOnInit(): void{
    this.initializeColumns();
    this.assessmentData = this.getAssessments();
    this.initBtnData();
  }

  initBtnData() {

    this.crudButtons = [
      {
        icon: "add",
        btnColor: "btn-purple-fill",
        btnClass: "px-2 me-2 mb-2 d-flex align-items-center",
        link: "",
        btnText: "Create New"
      },
      {
        icon: "library_add",
        btnColor: "btn-purple-fill",
        btnClass: "px-2 me-2 mb-2 d-flex align-items-center",
        link: "",
        btnText: "Copy Selected"
      },
      {
        icon: "delete",
        btnColor: "btn-red",
        btnClass: "px-2 mb-2 d-flex align-items-center",
        link: "",
        btnText: "Delete Selected"
      }
    ]
  }

  initializeColumns(): void {
    this.assessmentTableColumns = [
      {
        name: 'ID',
        dataKey: 'id',
        position: 'left',
        isSortable: false,
        priority: false
      },
      {
        name: 'Name',
        dataKey: 'name',
        position: 'left',
        isSortable: true,
        priority: true
      },
      {
        name: 'Node',
        dataKey: 'node',
        position: 'left',
        isSortable: true,
        priority: false
      },
      {
        name: 'Created by',
        dataKey: 'createdBy',
        position: 'left',
        isSortable: true,
        priority: true
      },
      {
        name: 'Status',
        dataKey: 'status',
        position: 'left',
        isSortable: true,
        priority: true
      },
      {
        name: 'Released',
        dataKey: 'released',
        position: 'left',
        isSortable: true,
        priority: false
      },
      {
        name: 'Last Updated',
        dataKey: 'lastUpdated',
        position: 'left',
        isSortable: true,
        priority: false
      },
      {
        name: 'Next Due',
        dataKey: 'nextDue',
        position: 'left',
        isSortable: true,
        priority: false
      }
    ];
  }

  getAssessments(): Assessments[] {
    return [
      {
        id: 1234,
        name: "Building 00102012",
        node: "Node A",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 3245,
        name: "Bus Terminal 34345",
        node: "Node B",
        link: "#",
        createdBy: "Chris Jones",
        status: "Locked",
        released: "No",
        lastUpdated: "02/15/2022",
        nextDue: "02/15/2023"
      },
      {
        id: 3223,
        name: "Parking Lot 34324",
        node: "Node 22",
        link: "#",
        createdBy: "Marnita Framm",
        status: "Locked",
        released: "No",
        lastUpdated: "03/02/2022",
        nextDue: "03/02/2023"
      },
      {
        id: 3223,
        name: "Building 00102012",
        node: "Node 4A",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1213,
        name: "\tMaintenance Facility 92383",
        node: "Node 113A",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1453,
        name: "Corporate Building 5",
        node: "Node F",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 2234,
        name: "Bus 201",
        node: "Node D",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 2334,
        name: "Building 00102012",
        node: "Node AA",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 2634,
        name: "Building 00102012",
        node: "Node 1B",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 7534,
        name: "Building 00102012",
        node: "Node 123",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1434,
        name: "Building 00102012",
        node: "Node CC",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1634,
        name: "Building 00102012",
        node: "Node DD",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      }
    ];
  }

}
