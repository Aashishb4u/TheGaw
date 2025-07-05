import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-manuel-flange-facing-machine',
  standalone: false,
  templateUrl: './manuel-flange-facing-machine.component.html',
  styleUrl: './manuel-flange-facing-machine.component.scss'
})
export class ManuelFlangeFacingMachineComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
