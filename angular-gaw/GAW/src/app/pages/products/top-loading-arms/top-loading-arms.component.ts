import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-top-loading-arms',
  standalone: false,
  templateUrl: './top-loading-arms.component.html',
  styleUrl: './top-loading-arms.component.scss'
})
export class TopLoadingArmsComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
