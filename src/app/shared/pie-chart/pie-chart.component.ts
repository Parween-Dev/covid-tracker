import { Component, Input, OnChanges, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import DatalabelsPlugin from 'chartjs-plugin-datalabels';
import { BaseChartDirective } from 'ng2-charts';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent implements OnChanges {
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;
  @Input() chartLabel?: string;
  @Input() todayTotals?: any;

  private chartItems = ['active', 'recovered', 'deaths'];

  public pieChartOptions: any = {
    responsive: true,
    plugins: {
      legend: { display: false },
      datalabels: {
        formatter: (value: any, ctx: any) => {
          if (ctx.chart.data.labels) {
            return ctx.chart.data.labels[ctx.dataIndex];
          }
        },
      },
    }
  };

  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: [],
    datasets: [{
      data: []
    }]
  };

  public pieChartType: ChartType = 'pie';
  public pieChartPlugins = [DatalabelsPlugin];

  constructor() { }

  ngOnChanges(): void {
        this.todayTotals.map(({ label, value }: any) => {
      if (this.chartItems.includes(label)) {
        this.pieChartData.labels?.push(label);
        this.pieChartData.datasets[0]?.data?.push(value);
      }
    })
  }
}
