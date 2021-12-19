import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurbocounterComponent } from './turbocounter.component';

describe('TurbocounterComponent', () => {
  let component: TurbocounterComponent;
  let fixture: ComponentFixture<TurbocounterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurbocounterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TurbocounterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
