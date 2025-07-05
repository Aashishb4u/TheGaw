import { AfterViewInit, Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SearchService } from '../../services/search.service';
import { Router } from '@angular/router';
declare var moment: any;
@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent implements AfterViewInit {
  gstTime: string = '';
  searchForm: FormGroup;
  isSearching: boolean = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private searchService: SearchService
  ) {
    this.searchForm = this.fb.group({
      query: [''],
    });
  }

  ngAfterViewInit(): void {
    this.updateGSTTime();
    // Update time every minute
    setInterval(() => {
      this.updateGSTTime();
    }, 60000);
  }

  updateGSTTime(): void {
    const gstTimeConst = moment()?.tz('Asia/Dubai').format('hh:mm A');
    this.gstTime = `GST: ${gstTimeConst}`;
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
