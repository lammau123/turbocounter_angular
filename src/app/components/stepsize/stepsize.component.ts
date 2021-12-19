import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'stepsize',
  templateUrl: './stepsize.component.html',
  styleUrls: ['./stepsize.component.css']
})
export class StepsizeComponent implements OnInit {
  @Output() counterEvent = new EventEmitter();
  stepSize: number = 1;

  constructor() { }

  ngOnInit(): void {
  }

  decrementStepSize({pageX, pageY}){
    if(this.stepSize > 1){
      this.stepSize--;
    }
    this.counterEvent.emit({pageX: pageX, pageY: pageY});
  }
  
  incrementStepSize({pageX, pageY}){
    this.stepSize++;
    this.counterEvent.emit({pageX: pageX, pageY: pageY});
  }
}
