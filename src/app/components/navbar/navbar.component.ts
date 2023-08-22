import { Component, OnInit } from '@angular/core';
import { DataServiceService } from 'src/app/Services/data-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  totalRecords: number = 0;
  constructor(public myService: DataServiceService) {}

  ngOnInit(): void {
    this.myService.recordsLength.subscribe((res) => {
      this.totalRecords = res;
      // console.log('totalRecords', this.totalRecords);
      return false;
    });
  }
}
