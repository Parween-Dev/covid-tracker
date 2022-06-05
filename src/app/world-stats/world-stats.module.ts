import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorldRoutingModule } from './world-stats-routing.module';
import { WorldStatsComponent } from './world-stats.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { LoadingIconModule } from '../shared/loading-icon/loading-icon.module';
import { TotalsWidgetModule } from '../shared/totals-widgets/totals-widgets.module';
import { PieChartModule } from '../shared/pie-chart/pie-chart.module';
import { BarChartModule } from '../shared/bar-chart/bar-chart.module';
import { WorldDatatableModule } from './world-datatable/world-datatable.module';
import { AlertModule } from '../shared/alert/alert.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        WorldRoutingModule,
        HighchartsChartModule,
        LoadingIconModule,
        TotalsWidgetModule,
        PieChartModule,
        BarChartModule,
        WorldDatatableModule,
        AlertModule
    ],
    declarations: [
        WorldStatsComponent
    ]
})
export class WorldStatsModule { }
