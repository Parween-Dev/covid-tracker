import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { ICountryStats } from '../_interface/country-stats.interface';
import { IWorldStats } from '../_interface/world-stats.interface';

@Injectable()
export class CovidStatsServices {
  private apiURL = environment.apiURL;

  constructor(private http: HttpClient) {}

  public getTotalsByCountry(country: string, day: 'yesterday' | 'twoDaysAgo'): Observable<ICountryStats> {
    return this.http.get<ICountryStats>(`${this.apiURL}/v3/covid-19/countries/${country}?${day}=true`);
  }

  public getWorldTotals(day: 'yesterday' | 'twoDaysAgo'): Observable<IWorldStats> {
    return this.http.get<IWorldStats>(`${this.apiURL}/v3/covid-19/all?${day}=true`);
  }
}
