import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-pneumatic-torque-wrench',
  standalone: false,
  templateUrl: './pneumatic-torque-wrench.component.html',
  styleUrl: './pneumatic-torque-wrench.component.scss'
})
export class PneumaticTorqueWrenchComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
