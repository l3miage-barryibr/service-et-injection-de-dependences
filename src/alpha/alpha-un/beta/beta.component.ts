import { Component, computed, OnInit, Signal } from '@angular/core';
import { AlphaUnService } from '../alpha-un.service';

@Component({
  selector: 'app-beta',
  templateUrl: './beta.component.html',
  styleUrls: ['./beta.component.css'],
})
export class BetaComponent {
  public countBeta: Signal<number>;

  constructor(private alphaUnService: AlphaUnService) {
    this.countBeta = computed<number>(() =>
      this.alphaUnService.incrementAlpha()
    );
  }

  incrementerBeta(): void {
    this.alphaUnService.incrementerAlpha();
  }
  decrementerBeta(): void {
    this.alphaUnService.decrementerAlpha();
  }
  restartBeta(): void {
    this.alphaUnService.restartAlpha();
  }
}
