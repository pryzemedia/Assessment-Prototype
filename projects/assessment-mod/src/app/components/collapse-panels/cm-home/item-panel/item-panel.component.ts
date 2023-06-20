import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {faChevronDown, faTable } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {cardList} from "../../data/panel-options-interface";
import {AssessmentTableComponent} from "../../../reusable/tables/assessment-table/assessment-table.component";
import {AssessmentCardComponent} from "./assessment-card-nav/assessment-card.component";

@Component({
  selector: 'app-item-panel',
  standalone: true,
    imports: [CommonModule, FontAwesomeModule, AssessmentCardComponent, AssessmentTableComponent],
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
        cardText : "Here is where you can create, clone and delete assessments.  Double click to open or edit an assessment.",
        iconColorClass : "text-purple",
        firstCardOnly: "show active",
        firstLinkOnly: "active"
      }
    ]
  }

  ngOnInit() :void{
    this.initItemList();
  }

}
