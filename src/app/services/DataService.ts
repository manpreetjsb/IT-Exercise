import { Injectable } from '@angular/core';
import { Observable, throwError, catchError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IBottle } from '../interface';
import { API_BASE_URL } from '../constants';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getBottles(): Observable<IBottle[]> {
    return this.http.get<IBottle[]>(API_BASE_URL).pipe(catchError(this.error));
  }

  error(error: HttpErrorResponse) {
    return throwError(() => {
      return error.message;
    });
  }
}
