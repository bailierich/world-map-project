import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private baseUrl: string = 'https://api.worldbank.org/v2/country';

  constructor(private http: HttpClient) {}

  getCountryInfo(countryCode: string): Observable<any> {
    const url = `${this.baseUrl}/${countryCode}?format=json`;
    return this.http.get(url).pipe(
      catchError((error) => {
        console.error('Error fetching country data:', error);
        return throwError(() => new Error('Error fetching country data'));
      })
    );
  }

  selectCountry(countryCode: string): Observable<any> {
    return this.getCountryInfo(countryCode).pipe(
      map((data) => data[1][0]),
      catchError((error) => {
        console.error('Error processing country selection:', error);
        return of(null);
      })
    );
  }
}
