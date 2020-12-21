import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GatewayUrls } from './gatewayurls';
import { Company } from '../Company';
import { IPO } from '../IPO';
import { JwtTockenService } from './jwt-tocken.service';
import { User } from '../User';
@Injectable({
  providedIn: 'root'
})
export class CompanyServiceService {


  private urls = new GatewayUrls();
   private jwt: string = '';
  private header: HttpHeaders;
 
    
  constructor(private http: HttpClient,private token: JwtTockenService)
   {
    
     this.jwt = this.token.getToken() as string;
     this.header = new HttpHeaders({
      'Authorization': 'bearer ' + this.jwt
    });

   }


getCompanies() {

  return this.http.get(this.urls.CompanyEndpoint, { headers: this.header });
}
saveCompanyt(Comp: Company) {
  return this.http.post(this.urls.CompanyEndpoint, Comp, { headers: this.header });//, { headers: this.header });
}
saveIPO(ipo: IPO) {
  return this.http.post(this.urls.IPOEndpoint, ipo, { headers: this.header });//, { headers: this.header });
}
saveUser(user: User) {
  return this.http.post(this.urls.RegisterEndpoint, user, { headers: this.header });//, { headers: this.header });
}
getCompBySector(id: string) {
  return this.http.get(`${this.urls.SectorbyEndpoint}/${id}`, { headers: this.header });//, { headers: this.header });
}
getCompBySE(id: string) {
  return this.http.get(`${this.urls.seEndpoint}/${id}`, { headers: this.header });//, { headers: this.header });
}
getsector(){
  return this.http.get(this.urls.SectorEndpoint, { headers: this.header }); 
}
getse(){
  return this.http.get(this.urls.seEndpoint, { headers: this.header }); 

}
getstockprice(id){
  return this.http.get(`${this.urls.StockEndpoint}/${id}`, { headers: this.header }); 

}
}