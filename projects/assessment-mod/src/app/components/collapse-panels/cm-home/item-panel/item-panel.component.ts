import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {faChevronDown, faTable } from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {CardNavComponent} from "../../reusable/card-nav/card-nav.component";

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

}
