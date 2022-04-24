import { Injectable , NgZone} from '@angular/core';
import { Router } from '@angular/router';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { tap } from 'rxjs';
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
  
    constructor(private authService: AuthService, private router:Router , private ngZone:NgZone) {}
  
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
        ctx.patchState({
                            username : action.payload.username,
                            isLoggedIn : true 
                        });
        // return this.authService.loginUser(action.payload).pipe(tap({
        //     next: (data:any) => {
        //         if(data.status === 0)
        //         {
        //             ctx.patchState({
        //                 username : action.payload.username,
        //                 isLoggedIn : true 
        //             });
        //             return true;
        //         }
        //         window.alert(data.message);
        //         return false;
        //     },
        //     error:(err) =>{  
        //         return err;
        //     }
        }    
        
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>, action: Logout) {
        ctx.patchState({
            username : null,
            isLoggedIn : false 
        });
        // return this.authService.logout().pipe(tap({
        //     next: (data:any) => {
        //             if(data.status === 0)
        //             {
        //                 setState({
        //                     username: null,
        //                     isLoggedIn:false
        //                 });
        //                 return true;
        //             }
        //             window.alert(data.message);
        //             return false;
        //         },
        //         error:(err) =>{  
        //             return err;
        //         }
        // }));
    }
    // @Action(HasLogined){
    // hasLogined({ })

    // }
}
