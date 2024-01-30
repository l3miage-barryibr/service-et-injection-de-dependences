import { Component, computed, OnInit, Signal } from '@angular/core';
import { AService } from '../a.service';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.css'],
})
export class BComponent {
  public countB: Signal<number>;
  constructor(private readonly serviceA: AService) {
    this.countB = computed<number>(() => this.serviceA.increment());
  }
  incrementerB(): void {
    this.serviceA.incrementer();
  }
  decrementerB(): void {
    this.serviceA.decrementer();
  }
  restartB(): void {
    this.serviceA.reset();
  }
}
