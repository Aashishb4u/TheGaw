import { Component, OnDestroy, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
import moment from 'moment-timezone';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements OnInit, OnDestroy {
  gstTime: string = '';
  searchForm: FormGroup;
  isSearching: boolean = false;
  private intervalId: number | null = null;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  ngOnInit(): void {
    this.updateGSTTime();
    // Update time every minute
    if (isPlatformBrowser(this.platformId)) {
      this.intervalId = window.setInterval(() => {
        this.updateGSTTime();
      }, 60000);
    }
  }

  updateGSTTime(): void {
    const gstTimeConst = moment.tz('Asia/Dubai').format('hh:mm A');
    this.gstTime = `GST: ${gstTimeConst}`;
  }

  ngOnDestroy(): void {
    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  onSearch(): void {
    if (this.isSearching) return;

    const query = this.searchForm.get('query')?.value;
    if (!query || query.trim() === '') return;
    this.router.navigate(['/search'], {
      queryParams: { query: query },
    });
  }
}
