import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-chemical-injection-skids',
  standalone: false,
  templateUrl: './chemical-injection-skids.component.html',
  styleUrl: './chemical-injection-skids.component.scss'
})
export class ChemicalInjectionSkidsComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
