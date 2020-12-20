import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GatewayUrls } from './gatewayurls';
import { JwtTockenService } from './jwt-tocken.service';

@Injectable({
  providedIn: 'root'
})
export class IPOServiceService {
  private urls = new GatewayUrls();
  private jwt: string = '';
  private header: HttpHeaders;
  constructor(private http: HttpClient,private token: JwtTockenService) {
    this.jwt = this.token.getToken() as string;
    this.header = new HttpHeaders({
     'Authorization': 'bearer ' + this.jwt
   });

   }

   getIPO() {

    return this.http.get(this.urls.IPOEndpoint, { headers: this.header });
  }
  getSE() {

    return this.http.get(this.urls.seEndpoint, { headers: this.header });
  }
}
