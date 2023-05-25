import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faMinusSquare, faPlusSquare } from '@fortawesome/free-regular-svg-icons';
import { faCheckCircle,faChevronDown, faEdit, faIndent } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-hierarchy-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './hierarchy-panel.component.html',
  styleUrls: ['./hierarchy-panel.component.css']
})
export class HierarchyPanelComponent {

  faCheckCircle = faCheckCircle;
  faChevronDown = faChevronDown;
  faPlusSquare = faPlusSquare;
  faMinusSquare = faMinusSquare;
  faIndent = faIndent;
  faEdit = faEdit;

}
