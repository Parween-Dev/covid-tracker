import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { SubSink } from 'subsink';
import { ICountryStats } from '../_interface/country-stats.interface';
import { ITotals } from '../_interface/totals.interface';
import { CovidStatsServices } from '../_services/covid-stats.service';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss']
})
export class CountriesContainerComponent implements OnInit, OnDestroy {

  public todayTotals: ITotals[] = [];
  public yesterdayTotals: ITotals[] = [];
  public currentCountry: string = '';

  private subs = new SubSink;

  constructor(
    private covidStatsService: CovidStatsServices,
    private router: Router
  ) {
    this.currentCountry = this.router.url.split('/')[2];
  }

  ngOnInit(): void {
    this.subs.add(
      combineLatest([
        this.covidStatsService.getTotalsByCountry(this.currentCountry, 'yesterday'),
        this.covidStatsService.getTotalsByCountry(this.currentCountry, 'twoDaysAgo')
      ]).subscribe(([today, yesterday]: [ICountryStats, ICountryStats]) => {
        this.todayTotals = this.convertObjectToArray(today);
        this.yesterdayTotals = this.convertObjectToArray(yesterday);
      }
      )
    );
  }

  convertObjectToArray = (data: ICountryStats) => {
    return Object.entries(data).map(([key, value]) => {
      return {
        label: key,
        value: value
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
