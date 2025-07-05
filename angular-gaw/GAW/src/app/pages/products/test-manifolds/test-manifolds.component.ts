import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-test-manifolds',
  standalone: false,
  templateUrl: './test-manifolds.component.html',
  styleUrl: './test-manifolds.component.scss'
})
export class TestManifoldsComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
