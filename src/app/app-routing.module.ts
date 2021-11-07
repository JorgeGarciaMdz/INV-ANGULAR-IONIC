import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'signin', 
  loadChildren: () => import('./signin-user/signin-user.module').then(m => m.SigninUserModule) },
  { path: 'user', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
