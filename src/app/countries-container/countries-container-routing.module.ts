import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { CountriesContainerComponent } from './countries-container.component';
import { CountryStatsComponent } from './country-stats/country-stats.component';

const routes: Routes = [
    { path: '', component: CountriesContainerComponent, children: [
        { path: '', redirectTo: '/home', pathMatch: 'full' },
        { path: ':country', component: CountryStatsComponent }
      ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CountryRoutingModule { }
