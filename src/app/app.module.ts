import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
//import { HeaderComponent } from './header/header.component';
//import { MenuComponent } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import {RouterOutlet} from "@angular/router";
import {AssessmentModule} from "../../projects/assessment-mod/src/app/app.module";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {HttpClientModule} from "@angular/common/http";
//import { TopBarComponent } from './header/top-bar/top-bar.component';
import {HeaderComponent} from "./header/header.component";

@NgModule({
  declarations: [
    AppComponent,
    //HeaderComponent,
    //MenuComponent,
    //TopBarComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterOutlet,
    AssessmentModule.forRoot(),
    BrowserAnimationsModule,
    MatIconModule,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
