import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-floating-suction-unit',
  standalone: false,
  templateUrl: './floating-suction-unit.component.html',
  styleUrl: './floating-suction-unit.component.scss'
})
export class FloatingSuctionUnitComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
