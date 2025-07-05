import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseURL = 'https://thegawindustries.com/api/v1';
  private searchResultsSubject = new BehaviorSubject<any>(null);
  
  searchResults$ = this.searchResultsSubject.asObservable();

  constructor(
    private http: HttpClient,
    private apiService: ApiService
  ) { }

  search(query: string): Observable<any> {
    // Use the local JSON file for searching products
    return this.apiService.getFilteredProducts(query).pipe(
      tap(results => {
        debugger;
        this.searchResultsSubject.next(results);
      })
    );
    
    // Uncomment this if you want to use the API endpoint instead
    // return this.http.get(`${this.baseURL}/search?query=${encodeURIComponent(query)}`)
    //   .pipe(
    //     tap(results => {
    //       this.searchResultsSubject.next(results);
    //     })
    //   );
  }

  getLastResults(): any {
    return this.searchResultsSubject.getValue();
  }

  clearResults(): void {
    this.searchResultsSubject.next(null);
  }
}
