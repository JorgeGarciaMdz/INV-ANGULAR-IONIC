import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SigninUserRoutingModule } from './signin-user-routing.module';
import { SigninUserComponent } from './signin-user.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    SigninUserComponent
  ],
  imports: [
    CommonModule,
    SigninUserRoutingModule,
    FormsModule /* necesario para utilizar [(ngModel)] en la plantilla */,
    HttpClientModule
  ]
})
export class SigninUserModule { }
