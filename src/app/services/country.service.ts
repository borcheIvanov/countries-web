import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { CountryList } from '../models/country-list';
import { catchError } from 'rxjs/operators';
import { CountriesRequest } from '../models/countries-request';
import { CountryDetails } from '../models/country-details';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CountryService {
  constructor(private http: HttpClient) {}

  getAllCountries(requestModel: CountriesRequest): Observable<CountryList> {
    return this.http
      .get<CountryList>(
        `${environment.apiEndpoint}/countries/all?getItems=${requestModel.getItems}&skipItems=${requestModel.skipItems}`
      )
      .pipe(catchError((error: any) => throwError(error)));
  }

  getCountryByCode(code: string): Observable<CountryDetails> {
    return this.http
      .get<CountryDetails>(
        `${environment.apiEndpoint}/countries/country/${code}`
      )
      .pipe(catchError((error: any) => throwError(error)));
  }
}
