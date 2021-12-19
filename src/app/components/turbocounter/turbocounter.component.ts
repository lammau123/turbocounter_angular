import { Component, OnInit, ViewChild } from '@angular/core';
import { CounterComponent } from "../counter/counter.component";
import { StepsizeComponent } from "../stepsize/stepsize.component";

@Component({
  selector: 'turbocounter',
  templateUrl: './turbocounter.component.html',
  styleUrls: ['./turbocounter.component.css']
})
export class TurbocounterComponent implements OnInit {
  @ViewChild(CounterComponent) counter!: CounterComponent;
  @ViewChild(StepsizeComponent) step!: StepsizeComponent;

  xleft: number = 30;
  ytop: number = 30;
  show: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  showCircle({increase, decrease, pageX, pageY}): void {
    this.xleft = pageX - 10;
    this.ytop = pageY - 10;
    this.show = !this.show;
    if(increase){
      this.updateCount(this.step.stepSize);
    } else if(decrease){
      this.updateCount(-this.step.stepSize);
    }
  }

  updateCount(step: number){
    this.counter.updateCount(step);
  }
}
