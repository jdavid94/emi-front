import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoanRequest } from '../models/loan-request.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoanService {

  private apiUrl = 'http://localhost:8081/api/calculate-emi';

  constructor(private http: HttpClient) {}

  calculateEmi(loanRequest: LoanRequest): Observable<any> {
    return this.http.post<any>(this.apiUrl, loanRequest);
  }
}
