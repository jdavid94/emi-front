import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanRequest } from '../models/loan-request.model';
import { Observable } from 'rxjs';
import { UrlConfig } from '../config/url.config';

@Injectable({
  providedIn: 'root',
})
export class LoanService {

  private apiUrl = UrlConfig.calculateEmiUrl;

  constructor(private http: HttpClient) {}

  calculateEmi(loanRequest: LoanRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, loanRequest);
  }
}
