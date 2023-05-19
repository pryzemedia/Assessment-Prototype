import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  title = 'Assessment-Prototype';

  isDeskVar! : boolean;
  isMobVar! : boolean;

  toggleSlimMenu:boolean = false;
  wrapperDiv:boolean = true;

  @ViewChild(HeaderComponent, {static : true}) header! : HeaderComponent;

  isDesktop():boolean{
    this.isDeskVar = window.innerWidth > 1024;
    return this.isDeskVar;
  }

  isMobile():boolean{
    this.isMobVar = window.innerWidth <=640;
    return this.isMobVar;
  }

  interval: NodeJS.Timeout | undefined;

  transitionControl(){
    if(!this.isMobile()){
      this.header.addWrapperTransition();
      this.interval = setTimeout(() => {
        this.header.removeWrapperTransition();
      }, 301);
    }
  }

  toggleMenu():void{
    if(this.isDesktop()){
      this.toggleSlimMenu = !this.toggleSlimMenu;
      this.header.removeNormalizeClass();
    }else{
      this.header.toggleNormalizeClass();
      if(this.header.toggleNormalize){
        this.toggleSlimMenu = false;
      }else{
        this.toggleSlimMenu = true;
      }
    }

    this.transitionControl();
    window.dispatchEvent(new Event('resize'));

  }

  ngOnInit() {
  }
}
