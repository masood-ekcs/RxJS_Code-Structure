import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css'],
})
export class LogComponent implements OnInit {
  toDosData: any[] = [];

  constructor(private myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.todos.subscribe((res: any) => {
      // console.log(res);
      this.toDosData = res;
      localStorage.setItem('myLog', JSON.stringify(this.toDosData));
    });
    const myData = localStorage.getItem('myLog');
    if (myData) {
      this.toDosData = JSON.parse(myData);
    }
  }

  updateLog(logId: any, userInfo: any) {
    this.myService.updateToDo.next(true);
    console.log('logId ' + logId, 'userInfo ' + userInfo);
    this.myService.editText.next({ id: logId, userInfo: userInfo });
  }
}
