import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-impact-sockets',
  standalone: false,
  templateUrl: './impact-sockets.component.html',
  styleUrl: './impact-sockets.component.scss'
})
export class ImpactSocketsComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
