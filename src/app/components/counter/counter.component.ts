import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  @Output() counterEvent = new EventEmitter<any>();

  counter: number = 0;
  constructor() { }

  ngOnInit(): void {
  }
  
  increment({pageX, pageY}) {
    this.counterEvent.emit({increase: true, pageX: pageX, pageY: pageY});
  }
  
  decrement({pageX, pageY}) {
    this.counterEvent.emit({decrease: true, pageX: pageX, pageY: pageY});
  }

  updateCount(step: number){
    this.counter += step;
  }

}
