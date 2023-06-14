import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableColumn} from "../TableColumns";

@Component({
  selector: 'app-table-modal',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './table-modal.component.html',
  styleUrls: ['./table-modal.component.css']
})
export class TableModalComponent {

  @Input() tableColumns: TableColumn[] = [];


}
