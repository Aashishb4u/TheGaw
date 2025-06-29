import { Component } from '@angular/core';

@Component({
  selector: 'app-fluid-transfer-solution',
  standalone: false,
  templateUrl: './fluid-transfer-solution.component.html',
  styleUrl: './fluid-transfer-solution.component.scss'
})
export class FluidTransferSolutionComponent {
  products = [
            {
                name: "Top Loading Arms",
                imageIds: [48, 49],
                link: "top-loading-arms",
            },
            {
                name: "Bottom Loading Arms",
                imageIds: [50, 51],
                link: "bottom-loading-arms",
            },
            {
                name: "Marine Loading Arms",
                imageIds: [52, 53],
                link: "marine-loading-arms",
            },
            {
                name: "Floating Suction Unit",
                imageIds: [54, 55],
                link: "floating-suction-unit",
            },
            {
                name: "Positive Displacement Flow Meter",
                imageIds: [56, 57],
                link: "positive-displacement-flow-meter",
            },
            {
                name: "Gravity Unloading Flow Meter",
                imageIds: [58, 59],
                link: "gravity-unloading-flow-meter",
            },
        ];

}
