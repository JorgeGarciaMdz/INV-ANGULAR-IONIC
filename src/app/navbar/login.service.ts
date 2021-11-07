import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  // logIn(login: Login): boolean {
  //   if (login.user.length > 3 && login.password.length > 3)
  //     return true;
  //   else
  //     return false;
  // }
  logIn( login: Login){
    console.log("loginservice: " + JSON.stringify(login));
    return this.http.post('http://127.0.0.1:3000/api/v1/user/login', login, {});
  }
}

export interface Login {
  email: string,
  password: string
}
