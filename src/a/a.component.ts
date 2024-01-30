import { Component, computed, Signal } from '@angular/core';
import { AService } from './a.service';
import { BComponent } from './b/b.component';

@Component({
  selector: 'app-a',
  templateUrl: './a.component.html',
  styleUrls: ['./a.component.css'],
})
export class AComponent {
  public countA: Signal<number>;

  constructor(private serviceA: AService) {
    this.countA = computed<number>(() => this.serviceA.increment());
  }
  incrementerA(): void {
    this.serviceA.incrementer();
  }

  decrementerA(): void {
    this.serviceA.decrementer();
  }

  restartA(): void {
    this.serviceA.reset();
  }
}
