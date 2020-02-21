import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  constructor(private http: HttpClient) { }

  public getCountries() {
      const url = 'https://restcountries.eu/rest/v2/all';
      return this.http.get(url);
  }
}
