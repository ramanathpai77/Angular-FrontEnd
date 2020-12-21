import { Component, OnInit } from '@angular/core';
import { IPO } from '../IPO';
import { CompanyServiceService } from '../Services/company-service.service';
@Component({
  selector: 'app-create-ipo',
  templateUrl: './create-ipo.component.html',
  styleUrls: ['./create-ipo.component.css']
})
export class CreateIpoComponent implements OnInit {
  obj:IPO;
  constructor(private cs:CompanyServiceService) { 
    this.obj = new IPO();
  }

  ngOnInit(): void {


  }
 save()
  {
    console.log(this.obj);
    this.cs.saveIPO(this.obj).subscribe(
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
