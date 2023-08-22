import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  updateStatus: boolean = false;
  updatedDataInput: any; // this will capture the updatedData from Input.ts
  todosData: any;
  updatedlog: any;

  constructor(public myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.updateToDo.subscribe((res) => {
      this.updateStatus = res;
      // console.log(res);
    });
    this.myService.updatedData.subscribe((res) => {
      console.log('updatedData from Button ', res);
      this.updatedlog = res;
    });

    this.myService.editText.subscribe((res) => {
      console.log(res);
      this.updatedDataInput = res;
    });
  }

  addLogBtn() {
    this.myService.submit();
    this.myService.clear();
  }

  clearLogBtn() {
    this.myService.clear();
  }

  clearLocalStorage() {
    this.myService.clearStorage();
  }

  updateBtn() {
    console.log('Update Button clicked');
    let id = this.updatedDataInput.id;
    let todosArray = localStorage.getItem('myLog');
    if (todosArray) {
      this.todosData = JSON.parse(todosArray);
      // console.log('todosData from update button ', this.todosData, 'id ', id);

      let itemFoundFromArray = this.todosData.find(
        (item: { id: any }) => item.id == id
      );
      itemFoundFromArray.userInputLog = this.updatedlog;
      itemFoundFromArray.updated = true;
      itemFoundFromArray.date = new Date();
      // console.log('itemFoundFromArray', itemFoundFromArray);

      // console.log('todosData', this.todosData);
      this.myService.todos.next(this.todosData);
      localStorage.setItem('myLog', JSON.stringify(this.todosData));
      this.updateStatus = false;
      this.myService.clear();
    }
  }

  cancelUpdateBtn() {
    this.updateStatus = false;
    this.myService.clear();
  }
}
