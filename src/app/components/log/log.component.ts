import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  toDosData: any[] = [];
  closable = true;

  constructor(private myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.todos.subscribe((res: any) => {
      this.toDosData = res;
      // console.log('res ' + res);
      localStorage.setItem('myLog', JSON.stringify(this.toDosData));
    });
    const myData = localStorage.getItem('myLog');
    // console.log('myData ' + myData);
    if (myData) {
      this.toDosData = JSON.parse(myData);
    }
  }

  updateLog(logId: any, userInfo: any) {
    this.myService.updateToDo.next(true);
    console.log('logId ' + logId, 'userInfo ' + userInfo);
    this.myService.editText.next({ id: logId, userInfo: userInfo });
  }

  // using the SPLICE method to delete and update the Local Storage
  deleteMe(myId: number, i: any) {
    console.log('myId ' + myId, 'i ' + i);
    this.toDosData.splice(i, 1);
    localStorage.setItem('myLog', JSON.stringify(this.toDosData));

    // using the FILTER method to delete and update the Local Storage
    // deleteMe(myId: number, id: any) {
    //   const filteredData = [];
    //   for (let i = 0; i < this.toDosData.length; i++) {
    //     if (this.toDosData[id] != this.toDosData[i]) {
    //       filteredData.push(this.toDosData[i]);
    //     }
    //   }
    //   console.log(filteredData);
    //   this.toDosData = filteredData;
    //   localStorage.setItem('myLog', JSON.stringify(this.toDosData));
    // }
  }
}
