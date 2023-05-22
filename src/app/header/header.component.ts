import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {faAngleLeft, faAngleRight, faBars} from "@fortawesome/free-solid-svg-icons";
import {CommonModule} from "@angular/common";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {MenuComponent} from "../menu/menu.component";
import {TopBarComponent} from "./top-bar/top-bar.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, MenuComponent, TopBarComponent, FontAwesomeModule],
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
