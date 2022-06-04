import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { combineLatest } from 'rxjs';
import { CovidStatsServices } from '../_services/covid-stats.service';

@Component({
  selector: 'app-countries-container',
  templateUrl: './countries-container.component.html',
  styleUrls: ['./countries-container.component.scss']
})
export class CountriesContainerComponent implements OnInit {

  public todayTotals: any = [];
  public yesterdayTotals: any = [];
  public currentCountry: string = '';

  constructor(
    private covidStatsService: CovidStatsServices,
    private router: Router
  ) {
    this.currentCountry = this.router.url.split('/')[2];
  }

  ngOnInit(): void {
    combineLatest([
      this.covidStatsService.getTotalsByCountry(this.currentCountry, 'yesterday'),
      this.covidStatsService.getTotalsByCountry(this.currentCountry, 'twoDaysAgo')
    ]).subscribe(([ today, yesterday ]) => {
        this.todayTotals = this.convertObjectToArray(today);
        this.yesterdayTotals = this.convertObjectToArray(yesterday);
      }
    );
  }

  convertObjectToArray = (data: any) => {
    return Object.entries(data).map(([ key, value ]) => {
      return {
        label: key,
        value: value
      }
    })
  }
}
