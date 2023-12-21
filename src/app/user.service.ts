import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor(private http: HttpClient) { }

  getUsers() {
    return this.http.get('https://658484494d1ee97c6bcfe849.mockapi.io/api/users');
  }

  addUser(user: User) {
    return this.http.post('https://658484494d1ee97c6bcfe849.mockapi.io/api/users', user);
  }

  updateUser(user: User) {
    return this.http.put('https://658484494d1ee97c6bcfe849.mockapi.io/api/users/' + user.id, user);
  }

  deleteUser(id: number) {
    return this.http.delete('https://658484494d1ee97c6bcfe849.mockapi.io/api/users/' + id);
  }
}
