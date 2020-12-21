import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType} from 'chart.js';

import { Label } from 'ng2-charts';
import { CompanyServiceService } from '../Services/company-service.service';
import { stock } from '../stock';
@Component({
  selector: 'app-comparison-charts',
  templateUrl: './comparison-charts.component.html',
  styleUrls: ['./comparison-charts.component.css']
})
export class ComparisonChartsComponent implements OnInit {
  showLegends: false;
  Company:any=[];
  s1:any=[];
  s2:any=[];
  chartType: ChartType = 'bar';
  xAxesLabels : Label[] = [];
  dataSets: any = [];
  options: ChartOptions = {
    responsive: true,
    legend:{ display:false },
    scales: {
      yAxes: [{
        ticks:{
          min: 0
        }
      }]
    }
  }
  c1:string;
  c2:string;
  constructor(private comp: CompanyServiceService) { }

  ngOnInit(): void {
    this.comp.getCompanies().subscribe(
     ( data :any)=> {
        this.xAxesLabels = [...new Set(data.map(d=>d.cName))] as string[];
        console.log(this.xAxesLabels);
        const companynames = [...new Set(data.map(d=>d.cName))] as string[];
        const dss=(data.map(d=>d.turnover)) as number[];
        console.log("hello")
        let obj={data:dss,
          label:"turnovers"};
    this.dataSets.push(obj);
        console.log(this.dataSets);
        this.Company = data;
      },
      err => {
        console.log(err);
      }
    );

   


    }

    
     

  }



