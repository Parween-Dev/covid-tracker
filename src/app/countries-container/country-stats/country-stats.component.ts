import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { combineLatest } from 'rxjs';
import { ICountryStats } from 'src/app/_interface/country-stats.interface';
import { ITotals } from 'src/app/_interface/totals.interface';
import { CovidStatsServices } from 'src/app/_services/covid-stats.service';
import { SubSink } from 'subsink';

@Component({
  selector: 'app-country-stats',
  templateUrl: './country-stats.component.html',
  styleUrls: ['./country-stats.component.scss']
})
export class CountryStatsComponent implements OnInit, OnDestroy {
  public todayTotals: ITotals[] = [];
  public yesterdayTotals: ITotals[] = [];
  public currentCountry: string = '';
  public loading = true;

  private subs = new SubSink;

  constructor(
    private covidStatsService: CovidStatsServices,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.url.subscribe(url => {
      this.currentCountry = url[0].path;
      this.getCountryData();
    });
  }

  ngOnInit(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getCountryData = () => {
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

    setTimeout(() => {
      this.loading = false;
    }, 600);
  }

  convertObjectToArray = (data: ICountryStats) => {
    return Object.entries(data).map(([key, value]) => {
      return {
        label: key,
        value: value
      }
    })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
