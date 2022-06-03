import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WorldStatsComponent } from './world-stats.component';

const routes: Routes = [
    { path: '', component: WorldStatsComponent, children: [] }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class WorldRoutingModule { }
