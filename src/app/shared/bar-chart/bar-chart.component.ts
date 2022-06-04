import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { ChartConfiguration, ChartType, ChartData } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import DataLabelsPlugin from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.scss']
})
export class BarChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() chartLabel?: string;
  @Input() todayTotals?: any;
  @Input() yesterdayTotals?: any;

  private chartItems = ['active', 'todayCases', 'todayRecovered', 'todayDeaths'];

  public barChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    scales: {
      x: {},
      y: {
        min: 10
      }
    },
    plugins: {
      legend: {
        display: true,
      },
      datalabels: {
        anchor: 'end',
        align: 'end'
      }
    }
  };

  public barChartType: ChartType = 'bar';

  public barChartPlugins = [
    DataLabelsPlugin
  ];

  public barChartData: ChartData<'bar'> = {
    labels: ['Active', 'New Cases', 'New Recovered', 'New Deaths'],
    datasets: [
      { data: [], label: 'Yesterday' },
      { data: [], label: 'Today' }
    ]
  };

  constructor() { }

  ngOnChanges(): void {
    this.chartItems?.forEach((item: any) => {
      this.barChartData.datasets[0].data.push(this.yesterdayTotals.find(({ label }: any) => label === item).value);
      this.barChartData.datasets[1].data.push(this.todayTotals.find(({ label }: any) => label === item).value);
    });
  }
}