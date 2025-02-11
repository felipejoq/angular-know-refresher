import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: false,
  templateUrl: './counter.component.html',
})
export class CounterComponent {

  public counter: number = 10;
  public byAmount: number = 1;

  public incrementBy(amount: number = 1): void {
    this.counter+= amount;
  }

  public decrementBy(amount: number = 1): void {
    this.counter-= amount;
  }

  public reset(): void {
    this.counter = 10;
  }

}
