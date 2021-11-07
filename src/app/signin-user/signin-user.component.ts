import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/model-user';
import { RegisterUserService } from './register-user.service';

@Component({
  selector: 'app-signin-user',
  templateUrl: './signin-user.component.html',
  styleUrls: ['./signin-user.component.scss']
})
export class SigninUserComponent implements OnInit {

  constructor(private router: Router, private registerUser: RegisterUserService) { }
  genres:string[] = ['male', 'female', 'none']
  model: User = {};
  today: string = '';

  
  ngOnInit(): void {
    this.today = new Date().toISOString().slice(0, 10);
  }

  onChange(e: any){
    console.log(e.target.name + "  " + e.target.value);
  }

  back(){
    this.router.navigateByUrl('/');
  }

  submit(){
    console.log(JSON.stringify(this.model));
    this.registerUser.registerUser(this.model)
    .subscribe((data: any) => {console.log(JSON.stringify(data))});
    this.router.navigateByUrl('/');
  }

}
