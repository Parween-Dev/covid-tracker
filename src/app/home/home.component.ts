import { Component, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { CovidStatsServices } from '../_services/covid-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  todayTotals: any;
  yesterdayTotals: any;

  constructor(private covidStatsServices: CovidStatsServices) {}

  ngOnInit(): void {
    this.getWorldStats();
  }

  getWorldStats = () => {
    combineLatest([
      this.covidStatsServices.getWorldTotals('yesterday'),
      this.covidStatsServices.getWorldTotals('twoDaysAgo')
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
