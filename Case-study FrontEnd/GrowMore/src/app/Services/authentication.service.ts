import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GatewayUrls } from './gatewayurls';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private urls = new GatewayUrls();
  constructor(private http: HttpClient) { }
  authenticate(username: string, password: string){
    const obj = {
      username: username,
      password: password
    }
    return this.http.post(this.urls.LoginEndpoint,obj);
  }
}
