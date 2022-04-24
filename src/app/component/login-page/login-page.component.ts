import { Component, OnInit,Injectable } from '@angular/core'; 
import { Store } from '@ngxs/store'
import { AuthService } from 'src/app/auth.service';
import { HomePageComponent } from 'src/app/component/home-page/home-page.component';
import { Login } from 'src/app/actions/auth.action';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
@Injectable({ providedIn: 'root' })
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private store:Store) { }

  ngOnInit(): void {
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
 