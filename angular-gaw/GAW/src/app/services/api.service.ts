import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseURL = 'https://thegawindustries.com/api/v1/contact';

  constructor(private http: HttpClient) { }

  onSubmitContact(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseURL}/contact_us`, data, { headers });
  }

  onSubmitNewsletter(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseURL}/news-letter`, data, { headers });
  }


}
