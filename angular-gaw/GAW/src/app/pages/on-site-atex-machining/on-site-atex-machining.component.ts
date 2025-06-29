import { Component } from '@angular/core';

@Component({
  selector: 'app-on-site-atex-machining',
  standalone: false,
  templateUrl: './on-site-atex-machining.component.html',
  styleUrl: './on-site-atex-machining.component.scss'
})
export class OnSiteAtexMachiningComponent {
products = [
        {
            name: "Split-Frame Cold Cutting Machine",
            imageIds: [40, 41, 42, 43], // Replace '1' with the actual image ID
            link: "split-frame-cold-cutting-machine",
        },
        {
            name: "ID Mounted Flange Facing Machine",
            imageIds: [44, 45], // Replace '2' with the actual image ID
            link: "id-mounted-flange-facing-machine",
        },
        {
            name: "Manual Flange Facing Machine",
            imageIds: [46, 47], // Replace '3' with the actual image ID
            link: "manuel-flange-facing-machine",
        }
    ];

}
