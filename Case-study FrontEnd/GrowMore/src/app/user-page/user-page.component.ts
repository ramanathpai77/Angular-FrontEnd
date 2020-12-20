import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTockenService } from '../Services/jwt-tocken.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(public token: JwtTockenService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(){
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }
}
