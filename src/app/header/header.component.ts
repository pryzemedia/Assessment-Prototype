import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAngleLeft, faAngleRight, faBars} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output("toggleMenu") toggleMenu: EventEmitter<any> = new EventEmitter<any>();
  constructor() { }

  faBars = faBars;
  faAngleLeft = faAngleLeft;
  faAngleRight = faAngleRight;

  toggleTransitionClass: boolean = false;
  toggleNormalize:boolean = false;
  mainClass:boolean = true;

  triggerMenuResize(): void{
    this.toggleMenu.emit();
  }

  addWrapperTransition():void{
    this.toggleTransitionClass = true;
  }

  removeWrapperTransition():void{
    this.toggleTransitionClass = false;
  }

  toggleNormalizeClass():void{
    this.toggleNormalize = !this.toggleNormalize;
  }

  removeNormalizeClass():void{
    this.toggleNormalize = false;
  }

  ngOnInit(): void {
  }

}
