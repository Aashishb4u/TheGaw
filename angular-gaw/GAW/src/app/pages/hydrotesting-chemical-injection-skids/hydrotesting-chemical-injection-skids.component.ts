import { Component } from '@angular/core';

@Component({
  selector: 'app-hydrotesting-chemical-injection-skids',
  standalone: false,
  templateUrl: './hydrotesting-chemical-injection-skids.component.html',
  styleUrl: './hydrotesting-chemical-injection-skids.component.scss'
})
export class HydrotestingChemicalInjectionSkidsComponent {
products = [
            {
                name: "Hydrotesting Unit",
                imageIds: [32, 33, 34], // Replace '1' with the actual image ID
                link: "/hydrotesting-unit",
            },
            {
                name: "Chemical Injection Skids",
                imageIds: [35, 36], // Replace '2' with the actual image ID
                link: "/chemical-injection-skids",
            },
            {
                name: "Test Manifolds",
                imageIds: [37, 38, 39], // Replace '3' with the actual image ID
                link: "/test-manifolds",
            },
        ];
}
