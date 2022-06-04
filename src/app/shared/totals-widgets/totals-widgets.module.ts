import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalsWidgetsComponent } from './totals-widgets.component';
import { PipeModule } from 'src/app/_pipes/pipe.module';

@NgModule({
  imports: [
    CommonModule,
    PipeModule
  ],
  declarations: [TotalsWidgetsComponent],
  exports: [TotalsWidgetsComponent]
})
export class TotalsWidgetModule { }
