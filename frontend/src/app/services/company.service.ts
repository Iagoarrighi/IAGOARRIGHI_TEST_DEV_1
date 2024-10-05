import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from "../Company";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  private apiUrl = 'http://localhost:8080/company';

  constructor(private http:HttpClient) { }

  getCompanies():Observable <Company[]> {
    return this.http.get<Company[]>(this.apiUrl);
  }
}
