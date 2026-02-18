import { Component, OnInit, AfterViewInit, OnDestroy } from '@angular/core';
import { UtilityService } from '../../services/utility.service';
import { SeoService } from '../../services/seo.service';

@Component({
  template: ''
})
export class BaseProductComponent implements OnInit, AfterViewInit, OnDestroy {
  
  constructor(
    protected utilityService: UtilityService,
    protected seoService: SeoService
  ) {}
  
  ngOnInit(): void {
    this.utilityService.setupScrollActions();

    const productName = this.utilityService.getCurrentPath();
    if (productName) {
      this.seoService.setSeoForPath(productName);
    }
  }
  
  ngAfterViewInit(): void {
    this.utilityService.setupProductGallery();
    
    this.utilityService.setupTabFunctionality();
    
    this.utilityService.setupFileUpload();
    
    const productName = this.utilityService.getCurrentPath();

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
