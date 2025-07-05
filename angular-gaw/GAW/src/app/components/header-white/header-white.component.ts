import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from '../../services/search.service';
declare var moment: any;

@Component({
  selector: 'app-header-white',
  standalone: false,
  templateUrl: './header-white.component.html',
  styleUrls: ['./header-white.component.scss']
})
export class HeaderWhiteComponent implements AfterViewInit {
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
