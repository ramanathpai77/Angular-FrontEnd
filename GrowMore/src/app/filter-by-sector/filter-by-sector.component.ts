import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../Services/company-service.service';

@Component({
  selector: 'app-filter-by-sector',
  templateUrl: './filter-by-sector.component.html',
  styleUrls: ['./filter-by-sector.component.css']
})
export class FilterBySectorComponent implements OnInit {
  sector:any=[];
  comp: any = null;

  hide:boolean=true;
  selectedSector:string ="";
  constructor(private cs:CompanyServiceService) { }

  ngOnInit(): void {
    this.cs.getsector().subscribe(
      data => {
        console.log(data);
        this.sector = data;
      },
      err => {
        console.log(err);
      }
    );

  }
  save()
  {
    
    this.cs.getCompBySector(this.selectedSector).subscribe(
      
      res => { this.comp=res;
      if(this.comp==0)
    {
alert("No company under " + this.selectedSector )
    }
  this.hide=false;},
      err => { console.log(err); alert(err.status); }
    );

    
    
  }


}
