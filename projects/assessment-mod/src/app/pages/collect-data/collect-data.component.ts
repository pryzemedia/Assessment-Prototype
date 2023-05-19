import { Component, OnInit } from '@angular/core';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-collect-data',
  templateUrl: './collect-data.component.html',
  styleUrls: ['./collect-data.component.css']
})
export class CollectDataComponent implements OnInit {

  constructor() { }

  faInfoCircle = faInfoCircle;

  ngOnInit(): void {
  }

}
