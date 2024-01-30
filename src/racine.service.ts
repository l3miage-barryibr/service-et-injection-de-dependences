import { computed, effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class RacineService {
  private readonly compteur = signal<number>(0);
  public increment = computed<number>(() => this.compteur());

  incrementer(): void {
    this.compteur.update((x) => x + 1);
  }

  decrementer(): void {
    this.compteur.update((x) => x - 1);
  }

  reset(): void {
    this.compteur.set(0);
  }
}
