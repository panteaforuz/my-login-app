import { Component, OnInit } from '@angular/core';
import { HomePageComponent } from 'src/app/component/home-page/home-page.component';
import { LoginPageComponent } from 'src/app/component/login-page/login-page.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isLoggedIn:boolean = false ;
  userLoginData?: any;
  constructor( private homePageComponent :HomePageComponent ,private loginPageComponent:LoginPageComponent){}

  ngOnInit(): void {
  }

}
