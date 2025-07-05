import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-positive-displacement-flow-meter',
  standalone: false,
  templateUrl: './positive-displacement-flow-meter.component.html',
  styleUrl: './positive-displacement-flow-meter.component.scss'
})
export class PositiveDisplacementFlowMeterComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
