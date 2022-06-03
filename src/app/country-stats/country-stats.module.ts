import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryStatsComponent } from './country-stats.component';
import { CountryRoutingModule } from './country-stats-routing.module';
import { CovidStatsServices } from '../_services/covid-stats.service';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CountryRoutingModule
    ],
    declarations: [
        CountryStatsComponent
    ],
    providers: [CovidStatsServices],
})
export class CountryStatsModule { }
