import { Component, OnInit,Injectable } from '@angular/core'; 
import { AuthService } from 'src/app/auth.service';
import { HomePageComponent } from 'src/app/component/home-page/home-page.component';
import { HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})

@Injectable({ providedIn: 'root' })

export class LoginPageComponent implements OnInit {
  isLoginError : boolean = false ;
  isLoggedIn : boolean = false ;
  userData?: any ;
  constructor(private authService : AuthService, private homePageComponent:HomePageComponent) { }
  ngOnInit(): void {
  }
  OnSubmit(userName:string,password:string){
      this.authService.loginUser(userName,password).subscribe({
        next: (data:any) => {
           if(data.status === 0)
           {
            this.isLoggedIn = true;
            this.userData = data.params;
           }
           else{
             window.alert(data.message)
           }
        },
        error:(err) =>{  
          this.isLoginError = true ;
          return err;
        }
     });
  }
  getUserInfo(){
    return this.userData;
  }
 }
 