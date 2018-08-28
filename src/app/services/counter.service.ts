import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  private count = new BehaviorSubject<number>(0);
  public count$ = this.count.asObservable();

  constructor() { }

  increment() {
    let nextCount = this.count.value + 1;
    this.count.next(nextCount);
  }
}
