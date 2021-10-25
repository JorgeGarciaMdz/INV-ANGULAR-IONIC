import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  logIn(login: Login): boolean{
    if( login.user.length > 3 && login.password.length > 3 )
      return true;
    else
      return false;
  }
}

export interface Login{
  user: string,
  password: string
}
