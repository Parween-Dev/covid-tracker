import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { capitalizeString } from 'src/app/_libraries/capitalize-string';

@Component({
  selector: 'app-world-datatable',
  templateUrl: './world-datatable.component.html',
  styleUrls: ['./world-datatable.component.scss']
})
export class WorldDatatableComponent implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @Input() totalsByCountry: any;

  rows: any[] = [];
  temp: any[] = [];
  columns: any = [{ prop: 'country' }];
  removedItems = ['updated', 'countryInfo', 'continent'];

  public tableData = {
    columns: [],
    promotionsData: [],
    rowCount: 0,
    limit: 10,
    sorts: [{ prop: 'country', dir: 'asc' }],
    offset: 0,
  };

  constructor() { }

  ngOnInit(): void {
    this.getColumns();

    this.rows = this.totalsByCountry
      .filter((item: any) => !this.removedItems.includes(item))
      .map((item: any) => {
        return {
          country: capitalizeString((item.country).split(/(?=[A-Z])/).join(' ')),
          ...item
        }
      });
  }

  getColumns = () => {
    Object.entries(this.totalsByCountry[0])
      .filter(([key, value]: any) => !this.removedItems.includes(key) && key !== 'country')
      .forEach(([key, value]: any) => {
        this.columns.push({ name: capitalizeString(key).split(/(?=[A-Z])/).join(' ') });
      });
  }

  updateFilter(event: any) {
    const val = event.target.value.toLowerCase();

    const temp = this.temp.filter(function (d) {
      return d.name.toLowerCase().indexOf(val) !== -1 || !val;
    });

    this.rows = temp;
    this.table.offset = 0;
  }

  formatString = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}
