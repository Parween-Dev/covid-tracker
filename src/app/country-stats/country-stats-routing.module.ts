import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CountryStatsComponent } from './country-stats.component';

const routes: Routes = [
    { path: '', component: CountryStatsComponent, children: [
        { path: 'countries', component: CountryStatsComponent, pathMatch: 'full' },
        { path: ':country', component: CountryStatsComponent }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }
