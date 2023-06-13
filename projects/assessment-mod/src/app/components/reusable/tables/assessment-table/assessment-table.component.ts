import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Assessments} from "./assessments";
import {TableColumn} from "../table-component/TableColumns";
import {Sort} from "@angular/material/sort";
import {TableComponent} from "../table-component/table.component";

@Component({
  selector: 'app-assessment-table',
  standalone: true,
  imports: [CommonModule, TableComponent],
  templateUrl: './assessment-table.component.html',
  styleUrls: ['./assessment-table.component.css']
})
export class AssessmentTableComponent {

  assessmentData: Assessments[] = [];
  assessmentTableColumns: TableColumn[] = [];


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

  ngOnInit(): void{
    this.initializeColumns();
    this.assessmentData = this.getAssessments();
  }


  initializeColumns(): void {
    this.assessmentTableColumns = [
      {
        name: 'Info',
        dataKey: 'information',
        position: 'left',
        isSortable: true
      },
      {
        name: 'ID',
        dataKey: 'assessId',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Name',
        dataKey: 'assessName',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Created by',
        dataKey: 'createdBy',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Status',
        dataKey: 'status',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Released',
        dataKey: 'released',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Last Updated',
        dataKey: 'lastUpdated',
        position: 'right',
        isSortable: true
      },
      {
        name: 'Next Due',
        dataKey: 'nextDue',
        position: 'right',
        isSortable: true
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
