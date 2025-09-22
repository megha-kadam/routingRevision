import { Injectable } from '@angular/core';
import { Iuser } from '../model/user.interface';
import { userArr } from '../const/user';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  usersArr : Array<Iuser> = userArr;
  constructor() { }

  fetchUser(id : string) : Observable<Iuser>{
    let getUser = this.usersArr.find(u => u.id === id)!;
    return of(getUser)
  }

  fetchAllUser() : Observable<Array<Iuser>>{
    return of(this.usersArr);
  }

  createUser(user : Iuser){
    this.usersArr.push(user)
  }

  updateUser(user : Iuser){
    let getIndex = this.usersArr.findIndex(u => u.id === user.id);
    this.usersArr[getIndex] = user;
  }

  removeUser(id : string){
    let getIndex = this.usersArr.findIndex(u => u.id === id);
    this.usersArr.splice(getIndex, 1);
  }
}
