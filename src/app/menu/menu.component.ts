import { Component, OnInit } from '@angular/core';
import {faFolderTree, faHouse, faUsers, faPlus, faChartArea } from '@fortawesome/free-solid-svg-icons';
import {faFolderOpen} from "@fortawesome/free-regular-svg-icons";
import {munuSubLinks} from "./menu-interface";
import {NgbCollapse} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'app-menu',
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
