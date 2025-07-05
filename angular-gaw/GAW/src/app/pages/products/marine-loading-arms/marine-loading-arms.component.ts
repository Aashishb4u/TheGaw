import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-marine-loading-arms',
  standalone: false,
  templateUrl: './marine-loading-arms.component.html',
  styleUrl: './marine-loading-arms.component.scss'
})
export class MarineLoadingArmsComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
