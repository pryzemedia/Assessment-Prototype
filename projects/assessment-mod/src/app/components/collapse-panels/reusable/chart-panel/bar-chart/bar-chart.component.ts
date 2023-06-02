import {Component, Input, ViewChild, Output, EventEmitter} from '@angular/core';
import { CommonModule } from '@angular/common';
import {ChartConfiguration, ChartData, ChartDataset, ChartEvent, ChartType} from "chart.js";
import {BaseChartDirective, NgChartsModule} from "ng2-charts";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import { faChartBar, faChevronDown } from '@fortawesome/free-solid-svg-icons';

import DataLabelsPlugin from 'chartjs-plugin-datalabels';



@Component({
  selector: 'app-bar-chart',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, NgChartsModule],
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  faChartBar = faChartBar;
  faChevronDown = faChevronDown;

  @Input() headerText: string = "List of Reports"; //Text that goes in the header
  @Input() colorTheme:string = "blue"; //red, lt-red, blue, green, purple, dark
  @Input() cardID: string = ""; // Must be unique
  @Input() horizontalBar: boolean = false;
  //@Input() dynamicContent: any[] = []; // pass json data

  @Input() buttons: boolean = false; // does this component use buttons
  @Input() buttonList: any[] = []; // pass json data

  @Input() inputChartData: ChartDataset[] = [];
  @Input() inputChartLabels: string[] = [];
  @Input() includeLegend: boolean = false;
  @Input() includeChartTitle: boolean = false;
  @Input() chartTitle: string = '';

  //button actions
  @Output() btn1_Action: EventEmitter<any> = new EventEmitter<any>();
  @Output() btn2_Action: EventEmitter<any> = new EventEmitter<any>();

  headerClass: string = "blue-header";
  reportMsgID: string = "";
  reportDataID: string = "";

  //public horizontalBarType: ChartType = 'horizontalBar';

  emitBtn1Action(params: any){
    //creates an instance of this if more than one button is used
    this.btn1_Action.emit(params);

  }

  emitBtn2Action(params: any){
    //Used if ony one button exists
    this.btn2_Action.emit(params);

  }

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis: 'x',
    // We use these empty structures as placeholders for dynamic theming.
    scales: {
      x: {
        min: 0
      },
      y: {
        min: 0
      }
    },
    plugins: {
      title: {
        display: false,
        text: ''
      },
      legend: {
        display: false,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };
  public barChartType: ChartType = 'bar';
  public barChartPlugins = [
    DataLabelsPlugin
  ];

  /*
  public barChartData: ChartData<'bar'> = {
    labels: [ '2006', '2007', '2008', '2009', '2010', '2011', '2012' ],
    datasets: [
      { data: [ 65, 59, 80, 81, 56, 55, 40 ], label: 'Series A' },
      { data: [ 28, 48, 40, 19, 86, 27, 90 ], label: 'Series B' }
    ]
  };
  */
  public barChartData: ChartData<'bar'> = {
    labels: [],
    datasets: [
      { data: [], label: 'Series A', backgroundColor: [] }
    ]
  };

  // events
  public chartClicked({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event?: ChartEvent, active?: {}[] }): void {
    console.log(event, active);
  }

  /* public randomize(): void {
     // Only Change 3 values
   /*this.barChartData.datasets[0].data = [
       Math.round(Math.random() * 100),
       59,
       80,
       Math.round(Math.random() * 100),
       56,
       Math.round(Math.random() * 100),
       40 ];

     this.chart?.update();

  }
*/

  public updateChart(): void{
    console.log("this.inputChartData[0].data = " + this.inputChartData[0].data + "barChartData.datasets[0].data = " + this.barChartData.datasets[0].data + "this.inputChartLabels = " + this.inputChartLabels);
    console.log("this.inputChartData[0].label = " + this.inputChartData[0].label + "this.inputChartData[0].backgroundColor = " + this.inputChartData[0].backgroundColor);
    console.log("this.barChartOptions.plugins.title[0].display = " + this.barChartOptions?.plugins?.title?.text);
    console.log("this.inputChartData.length = " + this.inputChartData.length);

    //remove default data
    this.barChartData.labels?.pop();
    this.barChartData.datasets.forEach((dataset) => {
      dataset.data.pop();
    });

    //populate new data from imports
    this.barChartData.labels = this.inputChartLabels;
    for (let i = 0; i < this.inputChartData.length; i ++){
        // @ts-ignore
        this.barChartData.datasets[i].data = this.inputChartData[i].data;
        // @ts-ignore
        this.barChartData.datasets[i].label = this.inputChartData[i].label;
        // @ts-ignore
        this.barChartData.datasets[i].backgroundColor = this.inputChartData[i].backgroundColor;

    }

    //barChartOptions update inputted values
    // @ts-ignore
    if(this.horizontalBar) this.barChartOptions.indexAxis = 'y';
    // @ts-ignore
    this.barChartOptions.plugins.title.display = this.includeChartTitle;
    // @ts-ignore
    this.barChartOptions.plugins.title.text = this.chartTitle;
    // @ts-ignore
    this.barChartOptions.plugins.legend.display = this.includeLegend;


    this.chart?.update();
  }

  ngOnInit(){
    switch (this.colorTheme){
      case "purple":
        this.headerClass= "purple-header";
        break;
      case "green" :
        this.headerClass = "green-header";
        break;
      case "dark" :
        this.headerClass = "dark-header";
        break;
      case "red" :
        this.headerClass = "red-header";
        break;
      case "lt-red" :
        this.headerClass = "lt-red-header";
        break;
      default:
        this.headerClass = "blue-header";
        break;
    }

    this.reportMsgID = this.cardID + 'Msg';
    this.reportDataID = this.cardID + 'Data';

    this.updateChart();

  }

}
