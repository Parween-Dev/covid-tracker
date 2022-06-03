import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'world', loadChildren: () => import('./world-stats/world-stats.module').then(m => m.WorldStatsModule) },
  { path: 'countries', loadChildren: () => import('./country-stats/country-stats.module').then(m => m.CountryStatsModule) },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
