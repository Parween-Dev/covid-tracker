import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-totals-widgets',
  templateUrl: './totals-widgets.component.html',
  styleUrls: ['./totals-widgets.component.scss']
})
export class TotalsWidgetsComponent implements OnInit, OnChanges {
  @Input() todayTotals: any;
  @Input() yesterdayTotals: any;
  @Input() columnClasses!: string;
  public todayOverview: any;
  public yesterdayOverview: any;
  private widgetItems = ['cases', 'deaths', 'recovered', 'active'];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.todayOverview = this.widgetItems.map(item => {
      return {
        label: item,
        value: this.todayTotals.find((data: any) => data.label === item).value
      }
    });

    this.yesterdayOverview = this.widgetItems.map(item => {
      return {
        label: item,
        value: this.yesterdayTotals.find((data: any) => data.label === item).value
      }
    });
  }
}
