import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { capitalizeString } from 'src/app/_libraries/capitalize-string';

@Component({
  selector: 'app-totals-datatable',
  templateUrl: './totals-datatable.component.html',
  styleUrls: ['./totals-datatable.component.scss']
})
export class TotalsDatatableComponent implements OnChanges {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @Input() todayTotals: any;
  @Input() yesterdayTotals: any;

  rows: any[] = [];
  temp: any[] = [];
  columns = [{ prop: 'metrics' }, { name: 'Yesterday' }, { name: 'Today' }];
  removedItems = ['updated', 'country', 'countryInfo', 'continent'];

  constructor() { }

  ngOnChanges(): void {
    this.rows = this.todayTotals
      .filter(({ label }: any) => !this.removedItems.includes(label))
      .map(({ label, value }: any) => {
        return {
          metrics: capitalizeString(label.split(/(?=[A-Z])/).join(' ')),
          today: value,
          yesterday: this.yesterdayTotals.find((item: any) => item.label === label).value
        }
      })
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }
}
