import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { SeoService } from '../../../services/seo.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-id-mounted-flange-facing-machine',
  standalone: false,
  templateUrl: './id-mounted-flange-facing-machine.component.html',
  styleUrl: './id-mounted-flange-facing-machine.component.scss'
})
export class IdMountedFlangeFacingMachineComponent extends BaseProductComponent {
  constructor(
    utilityService: UtilityService,
    seoService: SeoService
  ) {
    super(utilityService, seoService);
  }
}
