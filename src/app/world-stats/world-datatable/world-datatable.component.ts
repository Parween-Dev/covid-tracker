import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { DatatableComponent } from '@swimlane/ngx-datatable';
import { ICountryStats } from 'src/app/_interface/country-stats.interface';
import { IDatatable } from 'src/app/_interface/datatable.interface';
import { capitalizeString } from 'src/app/_libraries/capitalize-string';

@Component({
  selector: 'app-world-datatable',
  templateUrl: './world-datatable.component.html',
  styleUrls: ['./world-datatable.component.scss']
})
export class WorldDatatableComponent implements OnInit {
  @ViewChild(DatatableComponent) table!: DatatableComponent;
  @Input() totalsByCountry!: ICountryStats[];

  rows: IDatatable[] = [];
  temp: IDatatable[] = [];
  columns: any[] = [{ prop: 'country' }];
  removedItems = ['updated', 'countryInfo', 'continent'];

  public tableData = {
    rowCount: 0,
    limit: 10,
    sorts: [{ prop: 'cases', dir: 'desc' }],
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
        this.columns = [...this.columns, { name: capitalizeString(key).split(/(?=[A-Z])/).join(' ') }];
      });
  }

  formatString = (str: string) => {
    return str.replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    }).replace(/\s+/g, '');
  }
}
