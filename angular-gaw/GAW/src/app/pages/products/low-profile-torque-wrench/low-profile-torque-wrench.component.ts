import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-low-profile-torque-wrench',
  standalone: false,
  templateUrl: './low-profile-torque-wrench.component.html',
  styleUrl: './low-profile-torque-wrench.component.scss'
})
export class LowProfileTorqueWrenchComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
