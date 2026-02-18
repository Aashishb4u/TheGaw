import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-flange-spreader',
  standalone: false,
  templateUrl: './flange-spreader.component.html',
  styleUrl: './flange-spreader.component.scss'
})
export class FlangeSpreaderComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
