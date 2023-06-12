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
  orderTableColumns: TableColumn[] = [];

  getAssessments(): Assessments[] {

    return [
      {
        id: 1234,
        name: "Building 00102012",
        createdBy: "Chris Jones",
        status: "Data Collection",
        released: "No",
        lastUpdated: "01/02/2021",
        nextDue: "01/02/2022"
      }
    ];
  }

}
