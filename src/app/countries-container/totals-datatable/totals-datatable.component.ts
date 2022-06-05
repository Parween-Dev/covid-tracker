import { Component, Input, OnChanges, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { IDatatable } from 'src/app/_interface/datatable.interface';
import { ITotals } from 'src/app/_interface/totals.interface';
import { capitalizeString } from 'src/app/_libraries/capitalize-string';

@Component({
  selector: 'app-totals-datatable',
  templateUrl: './totals-datatable.component.html',
  styleUrls: ['./totals-datatable.component.scss']
})
export class TotalsDatatableComponent implements OnChanges {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @Input() todayTotals!: ITotals[];
  @Input() yesterdayTotals!: ITotals[];

  rows: IDatatable[] = [];
  temp: IDatatable[] = [];
  columns = [{ prop: 'metrics' }, { name: 'Yesterday' }, { name: 'Today' }];
  removedItems = ['updated', 'country', 'countryInfo', 'continent'];

  constructor() { }

  ngOnChanges(): void {
    this.rows = this.todayTotals
      .filter(({ label }: ITotals) => !this.removedItems.includes(label))
      .map(({ label, value }: ITotals) => {
        return {
          metrics: capitalizeString(label.split(/(?=[A-Z])/).join(' ')),
          today: value,
          yesterday: this.yesterdayTotals.find((item: ITotals) => item.label === label)?.value || null
        }
      })
  }
}
