import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  loginUser(payload:any){
    return this.http.post('https://demo2.rrr.co.ir/hp/rest/hfw/authentication/doLogin', {
      "loadUserInfo":true,
      "loadUserRoles":true,
      "pass":payload.password,
      "user":payload.username,
      "method":"PASS"
    }, {
      headers: new HttpHeaders({
        'X-Angular-Client': 'hamkelasiPlusDebug',
        'Content-Type': 'application/json; charset=utf-8;'
      }),
      withCredentials: true
    });
  }
  logout(){
    return this.http.post('https://demo2.rrr.co.ir/hp/rest/hfw/authentication/logout',{
      headers: new HttpHeaders({
        'X-Angular-Client': 'hamkelasiPlusDebug'
      })
    })
  }
  hasLogined(){
    return this.http.post('https://demo2.rrr.co.ir/hp/rest/hfw/authentication/hasLogined',{
      headers: new HttpHeaders({
        'X-Angular-Client': 'hamkelasiPlusDebug'
      })
    })
  }
}
