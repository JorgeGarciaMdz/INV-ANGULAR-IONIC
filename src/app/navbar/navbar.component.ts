import { Component, OnInit } from '@angular/core';
import { Login } from './login.service';
import { LoginService } from './login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  loginData: Login = {
    user: '',
    password: ''
  };

  logIn: boolean = false;

  loginService: LoginService;

  constructor(loginService: LoginService) {
    this.loginService = loginService;
  }

  ngOnInit(): void {
  }

  changeValueUser(e: string) {
    this.loginData.user = e;
  }

  changeValuePassword(e: string) {
    this.loginData.password = e
  }

  loginForm(): boolean {
    this.logIn = this.loginService.logIn(this.loginData);
    return false;
  }
  logout(): boolean {
    this.loginData = {
      user: '',
      password: ''
    }
    this.logIn = false;
    return false;
  }
}


