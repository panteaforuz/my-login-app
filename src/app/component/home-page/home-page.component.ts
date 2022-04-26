import { Component, Injectable, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Logout } from 'src/app/actions/auth.action';
import {AuthState} from "../../state/auth.state";

@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  isLoginError : boolean = false ;
  @Input() firstName?: string ;
  @Input() lastName?: string ;
  loginDateTime?: string;

  constructor(private router:Router , private store:Store) { }

  ngOnInit(): void {

    // if(!this.store.selectSnapshot(AuthState.isAuthenticated))
    // {
    //   this.router.navigate(['/login']);
    // }

  }
  // setUserData(resultParam : any):void{
  //     this.firstName = resultParam.firstName
  //     this.lastName = resultParam.lastName
  //     this.loginDateTime = resultParam.serverDate +" "+resultParam.serverTime ;
  //     this.router.navigate(['/home']);
  // }
  OnSubmit(){
    this.store.dispatch(new Logout())
}
}
