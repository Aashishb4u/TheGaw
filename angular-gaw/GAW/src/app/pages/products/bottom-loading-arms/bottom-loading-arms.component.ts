import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-bottom-loading-arms',
  standalone: false,
  templateUrl: './bottom-loading-arms.component.html',
  styleUrl: './bottom-loading-arms.component.scss'
})
export class BottomLoadingArmsComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
