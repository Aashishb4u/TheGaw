import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-multi-stage-bolt-tensioner',
  standalone: false,
  templateUrl: './multi-stage-bolt-tensioner.component.html',
  styleUrl: './multi-stage-bolt-tensioner.component.scss'
})
export class MultiStageBoltTensionerComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
