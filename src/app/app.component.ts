import { Component } from '@angular/core';
import {Router, RouterState, RouterStateSnapshot} from '@angular/router';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import {AuthStateModel, Login, Logout} from './actions/auth.action';
import { AuthState } from './state/auth.state';
import { AuthService} from "./auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private actions: Actions, private router: Router, private store :Store, private authService:AuthService) {

  }

  ngOnInit() {

    //  this.actions.pipe(ofActionSuccessful(Logout)).subscribe(() => this.router.navigate(['/login']));
    //  this.actions.pipe(ofActionSuccessful(Login)).subscribe((evt) => {
    //    console.log('ok', evt);
    //    this.router.navigate(['/home']);
    //  });
    this.authService.hasLogined().subscribe({
      next: (data:any) => {
        if(data.status === 0)
        {
          this.store.dispatch(new Login(data.params.username))
        }
        else {
          this.store.dispatch(new Logout())
        }
        window.alert(data.message);
        return false;
      },
      error:(err) => {
        console.log(err);
        return err;
      }
    });
    this.store.select(state => state.auth.isLoggedIn).subscribe((isLoggedIn) => {
      console.log(isLoggedIn)
      if (isLoggedIn)
      {
        this.router.navigate(['/home']);
      }
      // else
      // {
      //   this.router.navigate(['/login']);
      // }
    });

    // if(this.store.selectSnapshot(AuthState.isAuthenticated))
    // {
    //   this.router.navigate(['/home']);
    // }
    // else
    // {
    //   this.router.navigate(['/login']);
    // }
  }
}
  // if (this.authService.hasLogined()){
  //   this.router.navigate(['/home'])
  // }else{
  //   this.router.navigate(['/login'])
  // }


