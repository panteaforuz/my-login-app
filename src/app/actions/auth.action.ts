export interface AuthStateModel {
    isLoggedIn:boolean;
    username: string | null;
  }
  
  export class Login {
    static readonly type = '[auth] Login';
    constructor(public payload: {username: string}) {}
  }
  
  export class Logout {
    static readonly type = '[auth] Logout';
  }

  // export class HasLogined{
  //   static readonly type = '[auth] HasLogined'
    
  // }