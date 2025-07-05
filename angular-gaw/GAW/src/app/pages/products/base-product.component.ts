import { AfterViewInit, Directive } from '@angular/core';
import { UtilityService } from '../../services/utility.service';

@Directive()
export abstract class BaseProductComponent implements AfterViewInit {
  constructor(protected utilityService: UtilityService) {}

  ngAfterViewInit(): void {
    this.setupGallery();
  }

  protected setupGallery(): void {
    this.utilityService.setupProductGallery();
  }
}