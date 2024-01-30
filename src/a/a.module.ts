import { AComponent } from './a.component';
import { NgModule } from '@angular/core';
import { BComponent } from './b/b.component';
import { AlphaComponent } from '../alpha/alpha.component';
import { BetaComponent } from '../alpha/alpha-un/beta/beta.component';
import { AlphaUnComponent } from '../alpha/alpha-un/alpha-un.component';

@NgModule({
  declarations: [
    AComponent,
    BComponent,
    AlphaComponent,
    AlphaUnComponent,
    BetaComponent,
  ],
  exports: [
    AComponent,
    BComponent,
    AlphaComponent,
    AlphaUnComponent,
    BetaComponent,
  ],
})
export class AModule {}
