import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../Services/company-service.service';

@Component({
  selector: 'app-filter-by-se',
  templateUrl: './filter-by-se.component.html',
  styleUrls: ['./filter-by-se.component.css']
})
export class FilterBySEComponent implements OnInit {
  se:any=[];
  comp: any = null;
  hide:boolean=true;
  selectedSE:string;
  constructor(private cs:CompanyServiceService) { }

  ngOnInit(): void {
    this.cs.getse().subscribe(
      data => {
        console.log(data);
        this.se = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  save()
  {
    
    this.cs.getCompBySE(this.selectedSE).subscribe(
      
      res => { this.comp=res;
      if(this.comp==0)
    {
alert("No company under  this selected SE ")
    }
  this.hide=false;},
      err => { console.log(err); alert(err.status); }
    );

    
    
  }

}
