import { Injectable } from '@angular/core';
import { userSchema } from '../models/user-schema.model';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataServiceService {
  userDb: userSchema[] = [];
  userLog!: string;
  todos = new Subject<any>();
  updateToDo = new Subject<boolean>();
  editText = new Subject<any>();
  updatedData = new Subject<any>();

  clearInputBS = new BehaviorSubject<boolean>(false);

  constructor() {}

  addToLog(value: string) {
    // if (value != '') {
    this.userLog = value;
    // }
    // console.log(this.userLog);
  }

  submit() {
    // if (this.userLog != '') {
    // if (this.userLog.length > 0) {
    this.userDb.push({
      id: this.userDb.length + 1,
      date: new Date(),
      userInputLog: this.userLog,
    });
    console.log(this.userDb);
    this.todos.next(this.userDb);
    // alert('Log added…');
    // }
  }

  clear() {
    this.userLog = '';
    this.clearInputBS.next(true);
    localStorage.removeItem('myLog');
  }

  // editLog(id: any, userInput: any) {
  //   console.log(id, userInput);
  // }
}

// primeNG – library for angular
// primeFlex – library for angular
// angularMaterial - library for angular

// contact information of Rohit, the Trainer from CodingZen
// 87665 50949
// rohittbairwaa11@gmail.com
