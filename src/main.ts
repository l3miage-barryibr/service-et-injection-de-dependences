import { Component, computed, Signal } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { AModule } from './a/a.module';
import { RacineService } from './racine.service';

@Component({
  selector: 'app-root',
  standalone: true,
  //providers: [RacineService],
  imports: [AModule],
  templateUrl: './app.component.html',
})
export class App {
  public count: Signal<number>;

  constructor(private racineService: RacineService) {
    this.count = computed<number>(() => this.racineService.increment());
  }
  incrementer(): void {
    this.racineService.incrementer();
  }

  decrementer(): void {
    this.racineService.decrementer();
  }

  restart(): void {
    this.racineService.reset();
  }
}

bootstrapApplication(App);
