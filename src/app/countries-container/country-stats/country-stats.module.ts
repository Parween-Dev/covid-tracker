import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'src/app/_pipes/pipe.module';
import { CovidStatsServices } from 'src/app/_services/covid-stats.service';
import { CountriesContainerComponent } from '../countries-container.component';
import { CountryStatsComponent } from './country-stats.component';
import { PieChartModule } from 'src/app/shared/pie-chart/pie-chart.module';
import { BarChartModule } from 'src/app/shared/bar-chart/bar-chart.module';
import { TotalsWidgetModule } from '../../shared/totals-widgets/totals-widgets.module';
import { TotalsDatatableModule } from '../totals-datatable/totals-datatable.module';
import { AlertModule } from 'src/app/shared/alert/alert.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        NgxDatatableModule,
        PipeModule,
        PieChartModule,
        BarChartModule,
        TotalsWidgetModule,
        TotalsDatatableModule,
        AlertModule
    ],
    declarations: [
        CountriesContainerComponent,
        CountryStatsComponent
    ],
    providers: [CovidStatsServices],
})
export class CountryStatsModule { }
