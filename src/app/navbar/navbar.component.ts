import { Component, OnInit } from '@angular/core';
import { Login } from './login.service';
import { LoginService } from './login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginData: Login = {
    email: '',
    password: ''
  };

  logIn: boolean = false;

  loginService: LoginService;

  constructor(loginService: LoginService, private router: Router) {
    this.loginService = loginService;
  }

  ngOnInit(): void {
  }

  changeValueUser(e: string) {
    this.loginData.email = e;
  }

  changeValuePassword(e: string) {
    this.loginData.password = e
  }

  loginForm(): boolean {
    // this.logIn = this.loginService.logIn(this.loginData);
    console.log("navbar _> " +  JSON.stringify);
    this.loginService.logIn(this.loginData)
    .subscribe((data) => {
      if(data){
        this.logIn = true;
      } else {
        this.logIn = false;
      }
    })
    return false;
  }
  logout(): boolean {
    this.loginData = {
      email: '',
      password: ''
    }
    this.logIn = false;
    return false;
  }

  signIn(){
    this.router.navigateByUrl('signin');
  }
}


