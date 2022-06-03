import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { WorldRoutingModule } from './world-stats-routing.module';
import { WorldStatsComponent } from './world-stats.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule,
        WorldRoutingModule
    ],
    declarations: [
        WorldStatsComponent
    ]
})
export class WorldStatsModule { }
