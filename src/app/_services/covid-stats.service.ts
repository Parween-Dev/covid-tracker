import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class CovidStatsServices {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  public getTotalsByCountry(country: string, day: 'yesterday' | 'twoDaysAgo'): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/v3/covid-19/countries/${country}?${day}=true`);
  }

  public getWorldTotals(day: 'yesterday' | 'twoDaysAgo'): Observable<any> {
    return this.http.get<any>(`${this.apiURL}/v3/covid-19/all?${day}=true`);
  }
}
