import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {Assessments} from "./assessments";
import {TableColumn} from "../table-component/TableColumns";
import {Sort} from "@angular/material/sort";
import {TableComponent} from "../table-component/table.component";
//import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {TableModalComponent} from "../table-component/table-modal/table-modal.component";


@Component({
  selector: 'app-assessment-table',
  standalone: true,
  imports: [CommonModule, TableComponent, TableModalComponent],
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.css']
})
export class AssessmentTableComponent implements OnInit {
  @ViewChild(TableModalComponent) modalComponent!: TableModalComponent;

  assessmentData: Assessments[] = [];
  assessmentTableColumns: TableColumn[] = [];
  //current assessment wanted to use a different var then selectedAssessment
  public cAssessment: Assessments[] = [];


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
    /*const modalDiv = document.getElementById("tableModal");
    if(modalDiv != null){
      //const myModal = new bootstrap.Modal(modalDiv);
    }*/
    //this._NgbModal.open(TableModalComponent);
  }


  ngOnInit(): void{
    this.initializeColumns();
    this.assessmentData = this.getAssessments();
  }

  ngAfterViewInit(){

  }

  initializeColumns(): void {
    this.assessmentTableColumns = [
      /*{
        name: 'Info',
        dataKey: 'information',
        position: 'left',
        isSortable: true,
        priority: true
      },*/
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
        link: "#",
        createdBy: "Marnita Framm",
        status: "Locked",
        released: "No",
        lastUpdated: "03/02/2022",
        nextDue: "03/02/2023"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
        link: "#",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      },
      {
        id: 1234,
        name: "Building 00102012",
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
