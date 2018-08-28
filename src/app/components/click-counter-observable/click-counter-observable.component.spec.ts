import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickCounterObservableComponent } from './click-counter-observable.component';

describe('ClickCounterObservableComponent', () => {
  let component: ClickCounterObservableComponent;
  let fixture: ComponentFixture<ClickCounterObservableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClickCounterObservableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClickCounterObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
