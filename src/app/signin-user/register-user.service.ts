import { Injectable, OnDestroy} from '@angular/core';
import { HttpClient } from '@angular/common/http';
// para el observable
import { User } from '../users/model-user';

@Injectable({
  providedIn: 'any'
  // providedIn: 'root'  //para proveer en la app.module
})
export class RegisterUserService implements OnDestroy{

  constructor( private http: HttpClient) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }

  getHello(){
    return this.http.get('http://127.0.0.1:3000/',{});
  }

  registerUser(model: User){
    return this.http.post('http://127.0.0.1:3000/api/v1/user/register', model, {});
  }
}
