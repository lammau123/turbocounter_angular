import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TurbocounterComponent } from './components/turbocounter/turbocounter.component';
import { CounterComponent } from './components/counter/counter.component';
import { StepsizeComponent } from './components/stepsize/stepsize.component';
import { CircleComponent } from './components/circle/circle.component';

@NgModule({
  declarations: [
    AppComponent,
    TurbocounterComponent,
    CounterComponent,
    StepsizeComponent,
    CircleComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
