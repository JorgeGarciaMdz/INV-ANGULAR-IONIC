import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
  }

  changeValueUser(e:string){
    this.loginData.user = e;
  }

  changeValuePassword(e:string){
    this.loginData.password = e
  }

  submitForm(){
    console.log("user: " + this.loginData.user + ", password: " + this.loginData.password);
    return false;
  }
}

export interface Login{
  user: string,
  password: string
}
