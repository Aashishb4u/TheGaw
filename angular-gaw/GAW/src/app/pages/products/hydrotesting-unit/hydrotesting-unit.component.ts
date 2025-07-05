import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-hydrotesting-unit',
  standalone: false,
  templateUrl: './hydrotesting-unit.component.html',
  styleUrl: './hydrotesting-unit.component.scss'
})
export class HydrotestingUnitComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
