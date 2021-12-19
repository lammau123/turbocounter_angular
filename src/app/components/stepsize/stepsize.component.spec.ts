import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StepsizeComponent } from './stepsize.component';

describe('StepsizeComponent', () => {
  let component: StepsizeComponent;
  let fixture: ComponentFixture<StepsizeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StepsizeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StepsizeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
