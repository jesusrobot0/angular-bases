import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <div class="counter">
      <h1>{{counter}}</h1>
      <div>
        <button (click)="incrementCounter()">+</button>
        <button (click)="resetCounter(0)">reset</button>
        <button (click)="decrementCounter()">-</button>
      </div>
    </div>
  `,
  styles: `.counter {
    width: 150px;
    height: 150px;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid gray;
    border-radius: .5rem;
  }
  `
})

export class CounterComponent {
  counter = 0;

  incrementCounter() {
    this.counter++;
  }

  decrementCounter() {
    this.counter--;
  }

  resetCounter(value: number) {
    this.counter = value;
  }
}
