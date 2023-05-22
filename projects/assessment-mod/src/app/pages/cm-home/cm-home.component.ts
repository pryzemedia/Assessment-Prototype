import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ScopePanelComponent} from "../../components/collapse-panels/cm-home/scope-panel/scope-panel.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cm-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ScopePanelComponent],
  templateUrl: './cm-home.component.html',
  styleUrls: ['./cm-home.component.css']
})
export class CMHomeComponent implements OnInit {

  faCircleInfo = faCircleInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
