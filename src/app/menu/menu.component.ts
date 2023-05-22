import { Component, OnInit } from '@angular/core';
import {faFolderTree, faHouse, faUsers, faPlus, faChartArea, faChevronDown, faChartPie, faChartLine } from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen} from "@fortawesome/free-regular-svg-icons";
import {munuSubLinks} from "./menu-interface";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {RouterLink, RouterLinkActive} from "@angular/router";
//import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, RouterLink, RouterLinkActive],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  //Font-Awesome
  faUsers = faUsers;
  faHouse = faHouse;
  faFolderTree = faFolderTree;
  faFolderOpen = faFolderOpen;
  faPlus = faPlus;
  faChevronDown = faChevronDown;
  faChartPie = faChartPie;
  faChartLine = faChartLine;
  faChartArea = faChartArea;

  public isCollapsed = false;


  MainLinks: munuSubLinks[] = [
      {
        "linkName" : "Manage Assessment",
        "linkRoute" : "",
        "linkIcon" : ""
      }
    ]

  //Manage Assessment Links
  MALinks: munuSubLinks[] = [
    {
      "linkName" : "Data Collection",
      "linkRoute" : "",
      "linkIcon" : ""
    },
    {
      "linkName" : "Basic Analysis",
      "linkRoute" : "",
      "linkIcon" : ""
    },
    {
      "linkName" : "Approval Review",
      "linkRoute" : "",
      "linkIcon" : ""
    },
    {
      "linkName" : "Concluded",
      "linkRoute" : "",
      "linkIcon" : ""
    }

  ]

  ngOnInit(): void {
  }

}
