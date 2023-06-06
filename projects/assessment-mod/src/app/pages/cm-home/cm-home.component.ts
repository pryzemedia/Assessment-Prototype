import { Component, OnInit } from '@angular/core';
import {CommonModule} from "@angular/common";
import {ScopePanelComponent} from "../../components/collapse-panels/cm-home/scope-panel/scope-panel.component";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons';
import {ItemPanelComponent} from "../../components/collapse-panels/cm-home/item-panel/item-panel.component";

@Component({
  selector: 'app-cm-home',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ScopePanelComponent, ItemPanelComponent],
  templateUrl: './cm-home.component.html',
  styleUrls: ['./cm-home.component.css']
})
export class CMHomeComponent implements OnInit {

  faCircleInfo = faCircleInfo;

  constructor() { }

  ngOnInit(): void {
  }

}
