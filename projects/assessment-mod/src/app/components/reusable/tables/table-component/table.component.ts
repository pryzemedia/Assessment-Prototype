import {AfterViewInit, Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import {TableColumn} from "./TableColumns";
import {MatSort, MatSortModule, Sort} from '@angular/material/sort';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {DataPropertyGetterPipe} from "./data-property-pipe/data-property-getter.pipe";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {faClone, faFileExcel, faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-custom-table',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    DataPropertyGetterPipe,
    FontAwesomeModule
  ],
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit, AfterViewInit {

  public tableDataSource = new MatTableDataSource([]);
  public displayedColumns: string[] | undefined;
  @ViewChild(MatPaginator, {static: false}) matPaginator: MatPaginator | undefined;
  @ViewChild(MatSort, {static: true}) matSort: MatSort | undefined;

  @Input() isPageable = false;
  @Input() isSortable = false;
  @Input() isFilterable = false;
  @Input() tableColumns: TableColumn[] = [];
  @Input() rowActionIcon: string = "";
  @Input() paginationSizes: number[] = [5, 10, 15];
  @Input() defaultPageSize = this.paginationSizes[1];

  @Input() colorTheme:string = ""; //red, lt-red, blue, green, purple, dark

  @Output() sort: EventEmitter<Sort> = new EventEmitter();
  @Output() rowAction: EventEmitter<any> = new EventEmitter<any>();

  // this property needs to have a setter, to dynamically get changes from parent component
  @Input() set tableData(data: any[]) {
    this.setTableDataSource(data);
  }

  //icons
  faPlus = faPlus;
  faClone = faClone;
  faTrashCan = faTrashCan;
  faFileExcel = faFileExcel;

  //Table Header
  headerClass: string = "lt-purple-header";

  //hide non-priority rows
  nonPriorityTD: string = 'd-none d-md-table-cell align-middle';
  priorityTD: string = 'align-middle';

  //Modal related vars
  title = 'Assessment Details';
  closeResult: string = "";


  constructor() {}

  ngOnInit(): void {
    const columnNames = this.tableColumns.map((tableColumn: TableColumn) => tableColumn.name);
    if (this.rowActionIcon) {
      this.displayedColumns = [this.rowActionIcon, ...columnNames];
    } else {
      this.displayedColumns = columnNames;
    }

    switch (this.colorTheme){
      case "purple":
        this.headerClass= "purple-header";
        break;
      case "lt-purple":
        this.headerClass= "bg-purple";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "red-header";
        break;
      case "lt-red" :
        this.headerClass = "lt-red-header";
        break;
      default:
        this.headerClass = "";
        break;
    }
  }

  // we need this, in order to make pagination work with *ngIf
  ngAfterViewInit(): void {
    // @ts-ignore
    this.tableDataSource.paginator = this.matPaginator;
  }


  setTableDataSource(data: any) {
    // @ts-ignore
    this.tableDataSource = new MatTableDataSource<any>(data);
    // @ts-ignore
    this.tableDataSource.paginator = this.matPaginator;
    // @ts-ignore
    this.tableDataSource.sort = this.matSort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.tableDataSource.filter = filterValue.trim().toLowerCase();
  }

  sortTable(sortParameters: Sort) {
    // defining name of data property, to sort by, instead of column name
    // @ts-ignore
    sortParameters.active = this.tableColumns.find(column => column.name === sortParameters.active).dataKey;
    this.sort.emit(sortParameters);
  }

  emitRowAction(row: any) {
    this.rowAction.emit(row);
  }
}
