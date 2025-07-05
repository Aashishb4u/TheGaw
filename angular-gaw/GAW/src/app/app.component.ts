import { Component, OnInit, OnDestroy } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  standalone: false,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'GAW';
  
  constructor(private utilityService: UtilityService) {}
  
  ngOnInit(): void {
    // Set up scroll actions for the navbar
    this.utilityService.setupScrollActions();
  }
  
  ngOnDestroy(): void {
    // Clean up scroll event listeners
    this.utilityService.removeScrollListeners();
  }
}
