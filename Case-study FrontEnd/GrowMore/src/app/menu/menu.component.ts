import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtTockenService } from '../Services/jwt-tocken.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

 
  constructor(public token: JwtTockenService, private router: Router) { }

  ngOnInit(): void {
  
  }
  logout(){
    this.token.resetToken();
    this.router.navigateByUrl('/login');
  }

}
