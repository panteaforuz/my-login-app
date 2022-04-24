import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Store, ofActionSuccessful } from '@ngxs/store';
import { Login, Logout } from './actions/auth.action';
import { AuthState } from './state/auth.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private actions: Actions, private router: Router, private store :Store) {

  }

  ngOnInit() {
    // console.log(AuthState.isAuthenticated+"hi")
    //  if(this.store.selectSnapshot(AuthState.isAuthenticated))
    //  {
    //    this.router.navigate(['/home']);
    //  }
    //  this.actions.pipe(ofActionSuccessful(Logout)).subscribe(() => this.router.navigate(['/login']));
    //  this.actions.pipe(ofActionSuccessful(Login)).subscribe((evt) => {
    //    console.log('ok', evt);
    //    this.router.navigate(['/home']);
    //  });
         
    this.store.select(state => state.auth.isLoggedIn).subscribe((isLoggedIn) => {

      if (isLoggedIn)
      {
        this.router.navigate(['/home']);
      }
      else
      {
        this.router.navigate(['/login']);
      }
    });
  }

}