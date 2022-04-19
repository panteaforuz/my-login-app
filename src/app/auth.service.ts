import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(username:string , password:string){
    return this.http.post('https://demo2.rrr.co.ir/hp/rest/hfw/authentication/doLogin', {
      "loadUserInfo":true,
      "loadUserRoles":true,
      "pass":password,
      "user":username,
      "method":"PASS"
    }, {
      headers: new HttpHeaders({
        'X-Angular-Client': 'hamkelasiPlusDebug',
        'Content-Type': 'application/json; charset=utf-8;'
      }),
      withCredentials: true
    });
  }
  
}
