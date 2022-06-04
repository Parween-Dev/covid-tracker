import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgChartsModule } from 'ng2-charts';
import { BarChartComponent } from './bar-chart.component';

@NgModule({
  imports: [
    CommonModule,
    NgChartsModule
  ],
  declarations: [BarChartComponent],
  exports: [BarChartComponent]
})
export class BarChartModule { }
