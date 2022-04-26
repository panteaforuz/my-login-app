import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { Store } from "@ngxs/store";
import { tap } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor( private authService:AuthService , private router:Router) {}

  canActivate() {

    return this.authService.hasLogined().pipe(tap({
        next: (data:any) => {
            if(data.status === 0)
            {
                return true
            }
            console.log("redirect diesnt work in activate")
            this.router.navigateByUrl('/login');
            // throw Error;
            return false;
        },
        error:(err) =>{
            // return err;
            return false;
        }
    }));

  }

}
