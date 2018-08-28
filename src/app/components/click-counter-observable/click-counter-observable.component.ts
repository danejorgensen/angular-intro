import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'click-counter-observable',
  templateUrl: './click-counter-observable.component.html',
  styleUrls: ['./click-counter-observable.component.css']
})
export class ClickCounterObservableComponent implements OnInit {

  count: number = 0;

  constructor(private service: CounterService) { }

  ngOnInit() {
    this.service.count$.subscribe(count => this.count = count);
  }

  increment() {
    this.service.increment();
  }
}
