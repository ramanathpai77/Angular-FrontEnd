import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../Services/company-service.service';

@Component({
  selector: 'app-manage-companies',
  templateUrl: './manage-companies.component.html',
  styleUrls: ['./manage-companies.component.css']
})
export class ManageCompaniesComponent implements OnInit {
  Company:any=[];
  constructor(private comp: CompanyServiceService) { }

  ngOnInit(): void {
    this.comp.getCompanies().subscribe(
      data => {
        console.log(data);
        this.Company = data;
      },
      err => {
        console.log(err);
      }
    );
    
  }

}
