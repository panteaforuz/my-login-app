import { Component, OnInit,Injectable } from '@angular/core';
import { Store } from '@ngxs/store'
import { AuthService } from 'src/app/auth.service';
import { HomePageComponent } from 'src/app/component/home-page/home-page.component';
import { Login } from 'src/app/actions/auth.action';
import {AuthState} from "../../state/auth.state";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
@Injectable({ providedIn: 'root' })
export class LoginPageComponent implements OnInit {

  constructor(private router:Router, private authService: AuthService, private store:Store) { }

  ngOnInit(): void {

    if(this.store.selectSnapshot(AuthState.isAuthenticated))
    {
      this.router.navigate(['/home']);
    }

  }

  OnSubmit(username:string, password:string){
      // this.store.dispatch(new Login({username:username , password: password}));

      this.authService.loginUser({username: username, password: password}).subscribe({
        next: (data:any) => {
            if(data.status === 0)
            {
              this.store.dispatch(new Login({username: username}));
              return true;
            }
            window.alert(data.message);
            return false;
        },
        error:(err) => {
          console.log(err);
          return err;
        }
    });
  }

  // getUserInfo(){
  //   return this.userData;
  // }
 }
