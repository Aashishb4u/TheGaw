import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

interface Product {
  name: string;
  imageIds: number[];
  category: string;
  link: string;
}

@Injectable({ providedIn: 'root' })
export class ApiService {
  private baseURL = 'https://thegawindustries.com/api/v1/contact';
  private productsJsonPath = 'assets/json/products.json';

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

  onSubmitManufacturing(data: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post(`${this.baseURL}/demo_form`, data);
  }

  requestTraining(body: any): Observable<any> {
    return this.http.post(`${this.baseURL}/request_for_training`, body);
  }

  registerSme(body: FormData): Observable<any> {
    return this.http.post(`${this.baseURL}/sme_form`, body);
  }

  partner(body: FormData): Observable<any> {
    return this.http.post(`${this.baseURL}/transfer_partner`, body);
  }

  /**
   * Fetches products from the JSON file and filters them based on a query
   * @param query The search query to filter products by
   * @returns An Observable of filtered products
   */
  getFilteredProducts(query?: string): Observable<Product[]> {
    // Add cache-busting query parameter with current timestamp
    const cacheBuster = `?t=${new Date().getTime()}`;

    return this.http.get<Product[]>(`${this.productsJsonPath}${cacheBuster}`).pipe(
      map(products => {
        if (!query || query.trim() === '') {
          return products;
        }

        // Filter products based on the query (case-insensitive)
        return products.filter(product =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.category.toLowerCase().includes(query.toLowerCase())
        );
      })
    );
  }
}
