import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.css']
})
export class CircleComponent implements OnInit {
  xleft: number = 30;
  ytop: number = 30;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showEvent(event: any): void{
    this.xleft = event.pageX - 10;
    this.ytop = event.pageY - 10;
  }
}
