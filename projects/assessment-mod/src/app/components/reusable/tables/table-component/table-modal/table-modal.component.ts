import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableColumn} from "../TableColumns";
import {Assessments} from "../../assessment-table/assessments";
//import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-table-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.css']
})
export class TableModalComponent implements OnInit{

  //@Input() modalId: string = "";
  @Input() tableColumns: TableColumn[] = [];
  @Input() selectedAssessment: Assessments[] = [];

  constructor(
    //private activeModal: NgbModal
  ) {}

  updateModalData(data:Assessments){
    this.selectedAssessment[0] = data;
    console.log("Modal triggered this.selectedAssessment = "+ this.selectedAssessment[0].name);
    console.log("this.selectedAssessment.length = " + this.selectedAssessment.length);
  }

  ngOnInit(): void{

  }

}
