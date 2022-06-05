import { Component, OnDestroy, OnInit } from '@angular/core';
import { combineLatest } from 'rxjs';
import { SubSink } from 'subsink';
import { ITotals } from '../_interface/totals.interface';
import { IWorldStats } from '../_interface/world-stats.interface';
import { CovidStatsServices } from '../_services/covid-stats.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  todayTotals: ITotals[] = [];
  yesterdayTotals: ITotals[] = [];

  private subs = new SubSink;

  constructor(private covidStatsServices: CovidStatsServices) { }

  ngOnInit(): void {
    this.getWorldStats();
  }

  getWorldStats = () => {
    this.subs.add(
      combineLatest([
        this.covidStatsServices.getWorldTotals('yesterday'),
        this.covidStatsServices.getWorldTotals('twoDaysAgo')
      ]).subscribe(([today, yesterday]: [IWorldStats, IWorldStats]) => {
        this.todayTotals = this.convertObjectToArray(today);
        this.yesterdayTotals = this.convertObjectToArray(yesterday);
      }
      )
    );
  }

  convertObjectToArray = (data: IWorldStats) => {
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
