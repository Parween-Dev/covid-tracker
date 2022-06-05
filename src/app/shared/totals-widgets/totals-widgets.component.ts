import { Component, Input, OnChanges } from '@angular/core';
import { ITotals } from 'src/app/_interface/totals.interface';

@Component({
  selector: 'app-totals-widgets',
  templateUrl: './totals-widgets.component.html',
  styleUrls: ['./totals-widgets.component.scss']
})
export class TotalsWidgetsComponent implements OnChanges {
  @Input() todayTotals!: ITotals[];
  @Input() yesterdayTotals!: ITotals[];
  @Input() columnClasses!: string;
  public todayOverview: ITotals[] = [];
  public yesterdayOverview: ITotals[] = [];
  private widgetItems = ['cases', 'deaths', 'recovered', 'active'];

  constructor() { }

  ngOnChanges(): void {
    this.todayOverview = this.widgetItems.map(item => {
      return {
        label: item,
        value: this.todayTotals.find((data: ITotals) => data.label === item)?.value || 0
      }
    });

    this.yesterdayOverview = this.widgetItems.map(item => {
      return {
        label: item,
        value: this.yesterdayTotals.find((data: ITotals) => data.label === item)?.value || 0
      }
    });
  }
}
