import {Component, Input, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from "@angular/material/icon";


@Component({
  selector: 'collapse-panel',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './collapse-panels.component.html',
  styleUrls: ['./collapse-panels.component.css']
})
export class CollapsePanelComponent implements OnInit{

  @Input() cardClass: string = '';
  @Input() headerClass: string = 'blue-header';
  @Input() collapseClass: string= '';
  @Input() expandID: string = 'collapseResources';
  @Input() matHeaderIcon: string = 'check_circle';
  @Input() headerLabel: string = 'Resources';
  @Input() toggleOn: boolean = true;
  @Input() disableToggle: boolean = false;
  @Input() toggleMessage: string = 'No Command selected. Select a Command to continue.'
  @Input() public hideContent: boolean = true;
  //public hideContent:boolean;


  ngOnInit() {
    //this.hideContent = this.toggleOn;
    this.hideContent = this.toggleOn;
  }


}
