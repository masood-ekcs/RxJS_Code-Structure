import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css'],
})
export class ButtonsComponent implements OnInit {
  updateStatus: boolean = false;

  constructor(public myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.updateToDo.subscribe((res) => {
      this.updateStatus = res;
      // console.log(res);
    });
  }

  addLogBtn() {
    this.myService.submit();
  }

  clearLogBtn() {
    this.myService.clear();
  }

  updateBtn() {
    console.log('Update Button clicked');
    //   // this.myService.editLog();
    //   console.log('id1' + id1, 'userInput1' + userInput1);
    this.myService.updatedData.subscribe((res) => {
      console.log('updated Data ' + res);
    });
  }
}
