import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../Services/authentication.service';
import { Router } from '@angular/router';
import { JwtTockenService } from '../Services/jwt-tocken.service';
@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {

  username: string = '';
  password: string = '';
  constructor(private auth: AuthenticationService,
    private ts: JwtTockenService,
    private router: Router) { }

  ngOnInit(): void {
  }
  doLogin() {
    this.auth.authenticate(this.username, this.password).subscribe(
      res => {
        this.ts.saveToken(res);
        if(this.ts.getUserType()=='admin')
        {
          this.router.navigateByUrl('/admin-url');
        }
        else{
        this.router.navigateByUrl('/manage-company');
        }
      },
      err => {
        console.log(err);
        if (err.status === 400) {
          alert('Invalid username/password');
        }
        else {
          alert('Error logging in');
        }
      }
    );
  }
}
