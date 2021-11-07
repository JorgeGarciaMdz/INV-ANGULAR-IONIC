import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SigninUserComponent } from './signin-user.component';

const routes: Routes = [{ path: '', component: SigninUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SigninUserRoutingModule { }
