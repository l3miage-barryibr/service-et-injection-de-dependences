import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AlphaUnService {
  private readonly compteurAlpha = signal<number>(0);
  public readonly incrementAlpha = computed<number>(() => this.compteurAlpha());

  incrementerAlpha(): void {
    this.compteurAlpha.update((x) => x + 1);
  }
  decrementerAlpha(): void {
    this.compteurAlpha.update((x) => x - 1);
  }

  restartAlpha(): void {
    this.compteurAlpha.set(0);
  }
}
