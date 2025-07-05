import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-split-frame-cold-cutting-machine',
  standalone: false,
  templateUrl: './split-frame-cold-cutting-machine.component.html',
  styleUrl: './split-frame-cold-cutting-machine.component.scss'
})
export class SplitFrameColdCuttingMachineComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
