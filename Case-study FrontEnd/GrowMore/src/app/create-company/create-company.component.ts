import { Component, OnInit } from '@angular/core';
import { Company } from '../Company';
import { CompanyServiceService } from '../Services/company-service.service';

@Component({
  selector: 'app-create-company',
  templateUrl: './create-company.component.html',
  styleUrls: ['./create-company.component.css']
})

export class CreateCompanyComponent implements OnInit {
  sector:any=[];
  se:any=[];
  obj:Company;
  obj1:Company;
  constructor(private cs:CompanyServiceService) { 
    this.obj = new Company();
  }


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
    this.obj1=this.obj;
    this.obj1.SectorId=Number(this.obj.SectorId);
    this.obj1.SEId=Number(this.obj.SEId);
    this.obj1.LInSE=Boolean(this.obj.LInSE);

    console.log(this.obj1);
    this.cs.saveCompanyt(this.obj1).subscribe(
      data => {
        alert('Saved successfully');
      },
      err => {
        alert('Error saving');
        console.log(err);
      }
    );
  }

}
