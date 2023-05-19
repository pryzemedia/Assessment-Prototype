import { Component, OnInit } from '@angular/core';
import { faFolderOpen } from '@fortawesome/free-regular-svg-icons';
import {faGears, faMagnifyingGlassChart, faSitemap} from '@fortawesome/free-solid-svg-icons';
import {GenericLinks} from "../data/assessment-interface";
import {MatIconRegistry} from "@angular/material/icon";
import {DomSanitizer} from "@angular/platform-browser";



@Component({
  selector: 'app-assessment-home',
  templateUrl: './assessment-home.component.html',
  styleUrls: ['./assessment-home.component.css']
})
export class AssessmentHomeComponent implements OnInit {

  faGears = faGears;
  faFolderOpen = faFolderOpen;
  faMagnifyingGlassChart = faMagnifyingGlassChart;
  faSitemap = faSitemap;

  mainLinks: GenericLinks[] = [
    {
      "linkOffset": "",
      "linkName": "Manage Assessments",
      "linkDesc": "bla bala labkablaj lkj lj ",
      "btnText": "Show More",
      "iconClass": "fa-5x card-img-top text-center mt-3 success-green",
      "headerClass": "card-title bg-lt-green ps-1",
      "btnClass": "btn btn-success",
      "linkTarget": "",
      "icon": "",
      "svgName" : "manageAssessmentIcon"
    },
    {
      "linkOffset": "",
      "linkName": "Advanced Analysis",
      "linkDesc": "bla bala labkablaj lkj lj ",
      "btnText": "Show More",
      "iconClass": "fa-5x card-img-top text-center mt-3 warning-yellow",
      "headerClass": "card-title bg-lt-warning ps-1",
      "btnClass": "btn btn-warning",
      "linkTarget": "",
      "icon": "",
      "svgName" : "advancedAnalysisIcon"
    },
    {
      "linkOffset": "",
      "linkName": "Manage Templates",
      "linkDesc": "bla bala labkablaj lkj lj ",
      "btnText": "Show More",
      "iconClass": "fa-5x card-img-top text-center mt-3 text-blue",
      "headerClass": "card-title bg-lt-blue ps-1",
      "btnClass": "btn btn-blue-fill",
      "linkTarget": "",
      "icon": "",
      "svgName" : "manageTemplateIcon"
    },
    {
      "linkOffset": "",
      "linkName": "Survey Responses",
      "linkDesc": "Manage Survey Responses",
      "btnText": "Show More",
      "iconClass": "fa-5x card-img-top text-center mt-1 error-dark-red",
      "headerClass": "card-title bg-lightred ps-1",
      "btnClass": "btn btn-red",
      "linkTarget": "",
      "icon": "",
      "svgName" : "manageSurveyIcon"
    }
  ]

//"imageUrl" : "assets/img/manage_assessments_icon.svg"
  constructor(
    private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer
  ) {
    this.matIconRegistry.addSvgIcon(
      'manageAssessmentIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/manage_assessments_icon.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'advancedAnalysisIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/advanced_analysis_icon.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'manageTemplateIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/manage_templates_icon.svg')
    )
    this.matIconRegistry.addSvgIcon(
      'manageSurveyIcon',
      this.domSanitizer.bypassSecurityTrustResourceUrl('../../../assets/img/manage_survey_icon.svg')
    )
  }


  ngOnInit(): void {
  }

}
