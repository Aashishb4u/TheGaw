import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../../services/search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  standalone: false,
  styleUrls: ['./search-page.component.scss']
})
export class SearchPageComponent implements OnInit {
  searchQuery: string = '';
  searchResults$: Observable<any>;
  isLoading: boolean = true;
  hasError: boolean = false;
  
  constructor(
    private route: ActivatedRoute,
    private searchService: SearchService
  ) {
    this.searchResults$ = this.searchService.searchResults$;
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.searchQuery = params['query'] || '';
      this.hasError = params['error'] === 'true';
      
      if (this.searchQuery) {
        this.isLoading = true;
        this.searchService.search(this.searchQuery).subscribe({
          next: () => {
            this.isLoading = false;
          },
          error: () => {
            this.isLoading = false;
            this.hasError = true;
          }
        });
      } else {
        this.isLoading = false;
        this.searchService.clearResults();
      }
    });
  }
}
