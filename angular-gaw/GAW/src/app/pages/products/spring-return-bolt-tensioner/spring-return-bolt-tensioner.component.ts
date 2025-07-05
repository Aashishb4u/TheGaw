import { Component } from '@angular/core';
import { UtilityService } from '../../../services/utility.service';
import { BaseProductComponent } from '../base-product.component';

@Component({
  selector: 'app-spring-return-bolt-tensioner',
  standalone: false,
  templateUrl: './spring-return-bolt-tensioner.component.html',
  styleUrl: './spring-return-bolt-tensioner.component.scss'
})
export class SpringReturnBoltTensionerComponent extends BaseProductComponent {
  constructor(utilityService: UtilityService) {
    super(utilityService);
  }
}
