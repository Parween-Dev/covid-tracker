import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CountryStatsComponent } from './country-stats.component';
import { CountryRoutingModule } from './country-stats-routing.module';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        CountryRoutingModule
    ],
    declarations: [
        CountryStatsComponent
    ]
})
export class CountryStatsModule { }
