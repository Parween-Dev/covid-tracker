import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { TotalsWidgetModule } from '../shared/totals-widgets/totals-widgets.module';
import { CovidStatsServices } from '../_services/covid-stats.service';
import { LoadingIconModule } from '../shared/loading-icon/loading-icon.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TotalsWidgetModule,
    LoadingIconModule
  ],
  declarations: [HomeComponent],
  providers: [CovidStatsServices],
})
export class HomeModule { }
