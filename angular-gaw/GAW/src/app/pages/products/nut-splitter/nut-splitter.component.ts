import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-nut-splitter',
  standalone: false,
  templateUrl: './nut-splitter.component.html',
  styleUrl: './nut-splitter.component.scss'
})
export class NutSplitterComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
