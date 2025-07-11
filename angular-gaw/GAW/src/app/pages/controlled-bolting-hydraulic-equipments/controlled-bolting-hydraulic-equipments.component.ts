import { Component } from '@angular/core';

@Component({
  selector: 'app-controlled-bolting-hydraulic-equipments',
  standalone: false,
  templateUrl: './controlled-bolting-hydraulic-equipments.component.html',
  styleUrl: './controlled-bolting-hydraulic-equipments.component.scss'
})
export class ControlledBoltingHydraulicEquipmentsComponent {
  products = [
    {
      name: "Square Drive Torque Wrench",
      imageIds: [1, 2, 3, 4], // Assuming the image ID is 1
      link: "/square-drive-torque-wrench",
    },
    {
      name: "Low Profile Torque Wrench",
      imageIds: [5, 6, 7],
      link: "/low-profile-torque-wrench",
    },
    {
      name: "Pneumatic Torque Wrench",
      imageIds: [8, 9, 10],
      link: "/pneumatic-torque-wrench",
    },
    {
      name: "Torque Pump",
      imageIds: [11, 12],
      link: "/torque-pump",
    },
    {
      name: "Spring Return Bolt Tensioner",
      imageIds: [15, 16, 17],
      link: "/spring-return-bolt-tensioner",
    },
    {
      name: "Multi Stage Bolt Tensioner",
      imageIds: [18, 19],
      link: "/multi-stage-bolt-tensioner",
    },
    {
      name: "Subsea Bolt Tensioner",
      imageIds: [20, 21],
      link: "/subsea-bolt-tensioner",
    },
    {
      name: "Tensioning Pump",
      imageIds: [13, 14],
      link: "/tensioning-pump",
    },
    {
      name: "Nut Splitter",
      imageIds: [22, 23],
      link: "/nut-splitter",
    },
    {
      name: "Flange Spreader",
      imageIds: [26, 27, 28, 29],
      link: "/flange-spreader",
    },
    {
      name: "Hydraulic Pullers",
      imageIds: [24, 25],
      link: "/hydraulic-pullers",
    },
    {
      name: "Impact Sockets",
      imageIds: [30, 31],
      link: "/impact-sockets",
    },
  ];

}
