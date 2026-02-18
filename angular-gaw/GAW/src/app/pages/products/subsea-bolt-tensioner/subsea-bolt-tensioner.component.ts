import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-subsea-bolt-tensioner',
  standalone: false,
  templateUrl: './subsea-bolt-tensioner.component.html',
  styleUrl: './subsea-bolt-tensioner.component.scss'
})
export class SubseaBoltTensionerComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
