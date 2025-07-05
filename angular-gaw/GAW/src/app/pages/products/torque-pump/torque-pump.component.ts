import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-torque-pump',
  standalone: false,
  templateUrl: './torque-pump.component.html',
  styleUrl: './torque-pump.component.scss'
})
export class TorquePumpComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
