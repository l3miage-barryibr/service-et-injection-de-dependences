import { Component, computed, OnInit, Signal } from '@angular/core';
import { RacineService } from '../racine.service';

@Component({
  selector: 'app-alpha',
  templateUrl: './alpha.component.html',
  styleUrls: ['./alpha.component.css']
})
export class AlphaComponent{

  public countAlpha: Signal<number>;

  constructor(private readonly racineService: RacineService) {
    this.countAlpha = computed<number>(() => this.racineService.increment())
   }

   incrementerAlpha(): void{
     this.racineService.incrementer();
   }
  decrementerApha(): void{
    this.racineService.decrementer();
  }
  restartAlpha(): void{
    this.racineService.reset();
  }

}