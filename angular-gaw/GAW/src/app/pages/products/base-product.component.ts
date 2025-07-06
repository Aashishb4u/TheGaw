import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Component({
  template: ''
})
export class BaseProductComponent implements OnInit, AfterViewInit, OnDestroy {
  
  constructor(protected utilityService: UtilityService) {}
  
  ngOnInit(): void {
    // Set up scroll actions for the navbar
    this.utilityService.setupScrollActions();
  }
  
  ngAfterViewInit(): void {
    // Set up product gallery
    this.utilityService.setupProductGallery();
    
    // Set up tab functionality
    this.utilityService.setupTabFunctionality();
    
    // Set up file upload functionality
    this.utilityService.setupFileUpload();
    
    // Get the current product name from the URL
    const productName = this.utilityService.getCurrentPath();
    
    // Set up file upload form with the appropriate endpoint and product name
    this.utilityService.setupFileUploadForm(
      `${productName}-form`, 
      'https://thegawindustries.com/api/v1/contact/product_order_form',
      productName
    );
  }
  
  ngOnDestroy(): void {
    // Clean up scroll event listeners
    this.utilityService.removeScrollListeners();
    
    // Clean up tab event listeners
    this.utilityService.removeTabListeners();
  }
}
