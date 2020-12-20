import { Component, OnInit } from '@angular/core';
import { CompanyServiceService } from '../Services/company-service.service';
import { User } from '../User';
@Component({
  selector: 'app-user-sign-up',
  templateUrl: './user-sign-up.component.html',
  styleUrls: ['./user-sign-up.component.css']
})
export class UserSignUpComponent implements OnInit {
obj:User
  constructor(private cs:CompanyServiceService) {
    this.obj = new User();
   }

  ngOnInit(): void {
  }
  save()
  {
    console.log(this.obj);
    this.cs.saveUser(this.obj).subscribe(
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
