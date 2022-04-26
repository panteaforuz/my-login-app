import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { AuthStateModel, Login, Logout } from '../actions/auth.action';
import { AuthService } from '../auth.service';


@State<AuthStateModel>({
    name: 'auth'
  })
  @Injectable()
  export class AuthState {

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.isLoggedIn;
    }

    constructor(private authService: AuthService, private router:Router ) {}

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        ctx.patchState({
                            username : action.payload.username,
                            isLoggedIn : true
                        });
        }

    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>, action: Logout) {
        ctx.patchState({
            username : null,
            isLoggedIn : false
        });
    }

}
