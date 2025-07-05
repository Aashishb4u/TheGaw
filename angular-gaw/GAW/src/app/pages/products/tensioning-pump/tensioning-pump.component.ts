import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-tensioning-pump',
  standalone: false,
  templateUrl: './tensioning-pump.component.html',
  styleUrl: './tensioning-pump.component.scss'
})
export class TensioningPumpComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
