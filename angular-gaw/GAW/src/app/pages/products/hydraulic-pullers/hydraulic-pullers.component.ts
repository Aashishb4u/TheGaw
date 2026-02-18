import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-hydraulic-pullers',
  standalone: false,
  templateUrl: './hydraulic-pullers.component.html',
  styleUrl: './hydraulic-pullers.component.scss'
})
export class HydraulicPullersComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
