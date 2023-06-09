import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {faChevronDown, faTable } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CardNavComponent} from "../../../reusable/card-nav/card-nav.component";
import {cardList} from "../../data/panel-options-interface";

@Component({
  selector: 'app-item-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, CardNavComponent],
  templateUrl: './item-panel.component.html',
  styleUrls: ['./item-panel.component.css']
})
export class ItemPanelComponent {

  faTable = faTable;
  faChevronDown = faChevronDown;

  setCardList: cardList[] = [];

  initItemList(): void{

    this.setCardList = [
      {
        cardID : "assessments01",
        tabText : "Assessments",
        cardTitle : "Assessments",
        cardText : "Create, view, and update Assessments.",
        iconColorClass : "text-purple",
        firstCardOnly: "show active",
        firstLinkOnly: "active"
      },
      {
        cardID : "ATFP01",
        tabText : "ATFP Assessments",
        cardTitle : "ATFP Assessments",
        cardText : "Create, view, and update Assessments.",
        iconColorClass : "text-purple",
        firstCardOnly: "",
        firstLinkOnly: ""
      }
    ]
  }

  createNewAction(params:any){
    console.log('Create New Entry Button Clicked with parameter passed = ' + params);
  }

  cloneNewAction(params:any){
    console.log('Clone New Button Clicked with parameter passed = ' + params);
  }

  deleteSelectedAction(params:any){
    console.log('Delete Selection Button Clicked with parameter passed = ' + params);
  }

  ngOnInit() :void{
    this.initItemList();
  }

}
