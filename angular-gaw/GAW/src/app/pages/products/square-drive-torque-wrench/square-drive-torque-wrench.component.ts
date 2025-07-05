import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-square-drive-torque-wrench',
  standalone: false,
  templateUrl: './square-drive-torque-wrench.component.html',
  styleUrl: './square-drive-torque-wrench.component.scss'
})
export class SquareDriveTorqueWrenchComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
