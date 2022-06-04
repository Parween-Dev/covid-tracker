import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryRoutingModule } from './countries-container-routing.module';
import { CovidStatsServices } from '../_services/covid-stats.service';
import { TotalsWidgetsComponent } from './totals-widgets/totals-widgets.component';
import { TotalsDatatableComponent } from './totals-datatable/totals-datatable.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { PipeModule } from '../_pipes/pipe.module';
import { CountriesContainerComponent } from './countries-container.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CountryRoutingModule,
        NgbModule,
        NgxDatatableModule,
        PipeModule
    ],
    declarations: [
        CountriesContainerComponent,
        TotalsWidgetsComponent,
        TotalsDatatableComponent,
        CountryStatsComponent
    ],
    providers: [CovidStatsServices],
})
export class CountriesContainerModule { }
