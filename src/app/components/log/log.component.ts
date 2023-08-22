import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  toDosData: any[] = [];
  toDosDataLength: boolean = false;
  IsUpdatedDate: boolean = false;
  // theLength = new Subject<any>();

  constructor(private myService: DataServiceService) {}

  ngOnInit(): void {
    let data = localStorage.getItem('myLog');
    if (!data) {
      this.myService.todos.subscribe((res: any) => {
        this.toDosData = res;
        // this.myService.editText.next()
        if (this.toDosData.length > 0) {
          this.toDosDataLength = true;
        } else {
          this.toDosDataLength = false;
        }
        // console.log('res ' + res);
        localStorage.setItem('myLog', JSON.stringify(this.toDosData));
        this.myService.recordsLength.next(this.toDosData.length);
      });
    } else {
      this.toDosData = JSON.parse(data);
      localStorage.setItem('myLog', JSON.stringify(this.toDosData));
      this.myService.recordsLength.next(this.toDosData.length);
    }

    const myData = localStorage.getItem('myLog');
    // console.log('myData ' + myData);
    if (myData) {
      this.toDosData = JSON.parse(myData);
    }

    this.myService.updatedDate.subscribe((res) => {
      this.IsUpdatedDate = res;
    });

    // this.myService.recordsLength.next(this.toDosData.length);
    // console.log('this.toDosData.length', this.toDosData.length);
  }

  updateLog(logId: any, userInfo: any) {
    this.myService.updateToDo.next(true);
    console.log('logId ' + logId, 'userInfo ' + userInfo);
    this.myService.editText.next({ id: logId, userInfo: userInfo });
  }

  // using the SPLICE method to delete and update the Local Storage
  deleteMe(myId: string, i: any) {
    console.log('myId ' + myId, 'i ' + i);
    this.toDosData.splice(i, 1);
    localStorage.setItem('myLog', JSON.stringify(this.toDosData));
    this.myService.recordsLength.next(this.toDosData.length);

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
