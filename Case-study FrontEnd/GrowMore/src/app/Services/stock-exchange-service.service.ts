import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GatewayUrls } from './gatewayurls';
import { SE } from '../SE';
import { JwtTockenService } from './jwt-tocken.service';

@Injectable({
  providedIn: 'root'
})
export class StockExchangeServiceService {
  private urls = new GatewayUrls();
  private jwt: string = '';
  private header: HttpHeaders;
 
  constructor(private http: HttpClient,private token: JwtTockenService) { 
    this.jwt = this.token.getToken() as string;
     this.header = new HttpHeaders({
      'Authorization': 'bearer ' + this.jwt
    });

  }
  savese(se:SE) {

    return this.http.post(this.urls.seEndpoint, se, { headers: this.header });
  }
}
