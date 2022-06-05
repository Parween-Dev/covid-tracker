import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryRoutingModule } from './countries-container-routing.module';
import { CovidStatsServices } from '../_services/covid-stats.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from '../_pipes/pipe.module';
import { CountriesContainerComponent } from './countries-container.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';
import { PieChartModule } from '../shared/pie-chart/pie-chart.module';
import { BarChartModule } from '../shared/bar-chart/bar-chart.module';
import { TotalsWidgetModule } from '../shared/totals-widgets/totals-widgets.module';
import { LoadingIconModule } from '../shared/loading-icon/loading-icon.module';
import { TotalsDatatableModule } from './totals-datatable/totals-datatable.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CountryRoutingModule,
        NgbModule,
        NgxDatatableModule,
        PipeModule,
        PieChartModule,
        BarChartModule,
        TotalsWidgetModule,
        LoadingIconModule,
        TotalsDatatableModule
    ],
    declarations: [
        CountriesContainerComponent,
        CountryStatsComponent
    ],
    providers: [CovidStatsServices],
})
export class CountriesContainerModule { }
