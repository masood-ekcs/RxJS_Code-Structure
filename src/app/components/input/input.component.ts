import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent implements OnInit {
  userInput: string = '';
  editUserInput: any;

  constructor(private myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.clearInputBS.subscribe((isClearClicked: boolean) => {
      if (isClearClicked) {
        this.userInput = '';
      }
    });

    this.myService.editText.subscribe(
      (res) => {
        // console.log(res);
        this.editUserInput = res;
        this.userInput = res.userInfo;
      }
      // ,
      // (err) => {
      //   console.log('Error: ' + err);
      // },
      // () => {
      //   console.log('Complete ');
      // }
    );
  }

  takeValue() {
    this.myService.addToLog(this.userInput);
    // console.log('Data from Input', this.userInput);
    this.myService.updatedData.next(this.userInput);
    return false;
  }
}
