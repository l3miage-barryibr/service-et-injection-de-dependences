import { computed, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AService {
  private readonly compteur_a = signal<number>(0);
  public increment = computed<number>(() => this.compteur_a());

  incrementer(): void {
    this.compteur_a.update((x) => x + 1);
  }

  decrementer(): void {
    this.compteur_a.update((x) => x - 1);
  }

  reset(): void {
    this.compteur_a.set(0);
  }
}
