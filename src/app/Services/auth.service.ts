import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { identifierName } from '@angular/compiler';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  apiUrl = 'https://todoapp-6699d-default-rtdb.firebaseio.com/todos.json';
  loginSubmit() {
    this.http
      .post(this.apiUrl, {
        name: 'hello world',
      })
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );
  }

  registerUser(userId: any, userPassword: any) {
    return this.http.post(
      'https://todoapp-6699d-default-rtdb.firebaseio.com/usersList.json',
      {
        userId: userId,
        password: userPassword,
      }
    );
  }
}
