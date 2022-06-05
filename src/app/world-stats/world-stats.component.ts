import { Component, OnDestroy, OnInit } from '@angular/core';
import { catchError, combineLatest, of } from 'rxjs';
import { SubSink } from 'subsink';
import { countryList } from '../_constants/country-list';
import { CovidStatsServices } from '../_services/covid-stats.service';

@Component({
  selector: 'app-world-stats',
  templateUrl: './world-stats.component.html',
  styleUrls: ['./world-stats.component.scss']
})
export class WorldStatsComponent implements OnInit, OnDestroy {
  public todayTotals: any = [];
  public yesterdayTotals: any = [];
  public currentCountry: string = '';
  public loading = true;
  public totalsByCountry: any[] = [];

  private removedItems = ['updated', 'countryInfo', 'continent'];
  private subs = new SubSink;

  constructor(private covidStatsService: CovidStatsServices) { }

  ngOnInit(): void {
    this.getWorldData();
    this.getEveryCountryData();
  }

  getWorldData = () => {
    this.subs.add(
      combineLatest([
        this.covidStatsService.getWorldTotals('yesterday'),
        this.covidStatsService.getWorldTotals('twoDaysAgo')
      ]).subscribe(([today, yesterday]) => {
        this.todayTotals = this.convertObjectToArray(today);
        this.yesterdayTotals = this.convertObjectToArray(yesterday);
      })
    );

    setTimeout(() => {
      this.loading = false;
    }, 600);
  }

  getEveryCountryData = () => {
    Object.keys(countryList).forEach(countryCode => {
      this.subs.add(
        this.covidStatsService.getTotalsByCountry(countryCode, 'yesterday')
          .pipe(catchError(() => of({})))
          .subscribe(data => {
            if (Object.keys(data).length) {
              this.totalsByCountry = [
                ...this.totalsByCountry,
                data
              ];
            }
          })
      );
    });
  }

  convertObjectToArray = (data: any) => {
    return Object.entries(data)
      .filter(([key]) => !this.removedItems.includes(key))
      .map(([key, value]) => {
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
