import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-gravity-unloading-flow-meter',
  standalone: false,
  templateUrl: './gravity-unloading-flow-meter.component.html',
  styleUrl: './gravity-unloading-flow-meter.component.scss'
})
export class GravityUnloadingFlowMeterComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
