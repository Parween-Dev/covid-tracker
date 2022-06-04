import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from 'src/app/_pipes/pipe.module';
import { CovidStatsServices } from 'src/app/_services/covid-stats.service';
import { CountriesContainerComponent } from '../countries-container.component';
import { TotalsDatatableComponent } from '../totals-datatable/totals-datatable.component';
import { TotalsWidgetsComponent } from '../totals-widgets/totals-widgets.component';
import { CountryStatsComponent } from './country-stats.component';
import { PieChartModule } from 'src/app/shared/pie-chart/pie-chart.module';
import { BarChartModule } from 'src/app/shared/bar-chart/bar-chart.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        NgbModule,
        NgxDatatableModule,
        PipeModule,
        PieChartModule,
        BarChartModule
    ],
    declarations: [
        CountriesContainerComponent,
        TotalsWidgetsComponent,
        TotalsDatatableComponent,
        CountryStatsComponent
    ],
    providers: [CovidStatsServices],
})
export class CountryStatsModule { }
