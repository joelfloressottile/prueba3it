import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
// import { IndicatorsListComponent } from '../components/indicators/indicators-list/indicators-list.component';
// import { Indicator } from '../models/indicator.model'

@Injectable({
  providedIn: 'root'
})
export class ApiHelperService {
  apiUrl = environment.apiUrl; 

  constructor(private http:HttpClient) {}

  public getIndicators(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getIndicator(indicatorCode:string): Observable<any> {
    return this.http.get(`${this.apiUrl}${indicatorCode}`);
  }


  handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      console.error('Error:', error.error);
    } else {
      console.error(
        `Backend code ${error.status} | explanation : `, error.error);
    }
    return throwError(
      'Something bad happened; please try again later.');
  }
}
