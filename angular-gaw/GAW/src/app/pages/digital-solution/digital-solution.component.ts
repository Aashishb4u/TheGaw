import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-digital-solution',
  standalone: false,
  templateUrl: './digital-solution.component.html',
  styleUrls: ['./digital-solution.component.scss']
})
export class DigitalSolutionComponent implements OnInit {
  title = '';
  titleFirst = '';
  titleSecond = '';
  subtitle = '';
  hasTabs = true;
  features: string[] = [];
  monitoringPoints: string[] = [];
  kpis: string[] = [];
  maintenanceIntelligence: string[] = [];
  bestFor = '';
  downloadHref = '/assets/catalog/TheGAW%20Digital%20solutions%20-%20Brouchure%20V%201.1.pdf';
  downloadFilename = 'TheGAW Digital solutions - Brouchure V 1.1.pdf';
  activeTab: string = 'features';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.title = this.route.snapshot.data['title'] || '';
    this.setTitleParts();
    if (this.title === 'Foundation Twin') {
      this.subtitle = 'Essential Digital Visibility for Terminal Operations';
      this.features = [
        'Basic 3D modelling of the terminal asset',
        'Live terminal overview dashboard based on available data points',
        'Real time visualization for tanks, pipelines, and key operating parameters',
        'KPI dashboard with trend views for operational performance',
        'Truck loading area monitoring dashboards',
        'Basic ship loading visibility and vessel schedule view',
        'Web based access to dashboards, SCADA like mimics, 3D views, and reports',
      ];
      this.monitoringPoints = [
        'Tank level',
        'Pipeline flow rate',
        'Tank temperature',
        'Tank pressure',
        'Atmospheric temperature',
        'Other signals based on available instrumentation',
      ];
      this.kpis = [
        'Pump running hours',
        'Availability and downtime',
        'Energy consumption',
        'Flow vs design capacity',
        'Line pressure trends',
        'Trucks loaded per day',
        'Turnaround time (TAT)',
        'Loading rate',
        'Bay utilization',
        'Vessel arrival overview',
        'Inward outward trend',
        'Vessel schedule chart',
      ];
      this.bestFor = 'Terminals starting digital monitoring with existing instrumentation and looking for a reliable KPI visibility layer.';
      this.hasTabs = true;
    } else if (this.title === 'Insight Twin') {
      this.subtitle = 'Advanced Monitoring with Accurate 3D and Maintenance Intelligence';
      this.features = [
        'Advanced 3D modelling of the complete terminal asset using industrial 3D tools',
        'Optional laser scanning inputs for higher model accuracy and as built alignment',
        'Live monitoring dashboards for terminal overview, tank farm, pipelines, pumps, and loading areas',
        'Truck monitoring and management dashboards with operational performance views',
        'Ship monitoring and management dashboards including vessel movement overview and schedule visualization',
        'Preventive maintenance analysis tables and dashboards to support reliability planning',
        'KPI configuration and reporting structure adjusted based on client requirements',
        'Web based access to dashboards, trends, SCADA like mimics, 3D navigation, and reports',
      ];
      this.maintenanceIntelligence = [
        'Asset condition trend views',
        'Inspection planning tables',
        'Overdue maintenance visibility',
        'Equipment performance tracking',
        'Maintenance readiness dashboards based on available data',
      ];
      this.bestFor = 'Terminals that want higher model accuracy, deeper operational coverage, and maintenance focused insights to reduce downtime and improve reliability.';
      this.hasTabs = true;
    } else if (this.title === 'Immersive Twin') {
      this.subtitle = 'VR Enabled Digital Twin for Training, Simulation, and Equipment Level Management';
      this.features = [
        'VR ready digital twin model of the complete terminal asset',
        'Immersive virtual walkthrough for realistic site navigation and collaboration',
        'Live monitoring dashboards and KPI trend views for operations and reliability',
        'Process demonstration and simulation for operator training and readiness',
        'Equipment management module with equipment information linked to its exact location in the model',
        'Visual support for inspections, troubleshooting preparation, and abnormal condition awareness based on available monitoring logic',
        'Web and application based access for dashboards, 3D views, VR modules, and reporting',
      ];
      this.bestFor = 'Clients who require an immersive platform for training, remote collaboration, process understanding, and advanced terminal management.';
      this.hasTabs = true;
    }
  }

  private setTitleParts(): void {
    const parts = this.title.trim().split(/\s+/).filter(Boolean);
    this.titleFirst = parts[0] ?? '';
    this.titleSecond = parts.slice(1).join(' ');
  }

  setTab(tab: string): void {
    this.activeTab = tab;
  }
}
