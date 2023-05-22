import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-scope-panel',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule],
  templateUrl: './scope-panel.component.html',
  styleUrls: ['./scope-panel.component.css']
})
export class ScopePanelComponent {
  faChevronDown = faChevronDown;

}
