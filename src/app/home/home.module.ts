import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TotalsWidgetModule } from '../shared/totals-widgets/totals-widgets.module';
import { CovidStatsServices } from '../_services/covid-stats.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TotalsWidgetModule
  ],
  declarations: [HomeComponent],
  providers: [CovidStatsServices],
})
export class HomeModule { }
