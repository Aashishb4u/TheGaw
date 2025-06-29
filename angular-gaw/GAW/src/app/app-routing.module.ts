import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { CertificationsComponent } from './pages/certifications/certifications.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ManufacturingComponent } from './pages/manufacturing/manufacturing.component';
import { FluidTransferSolutionComponent } from './pages/fluid-transfer-solution/fluid-transfer-solution.component';
import { ProcurementProjectManagementComponent } from './pages/procurement-project-management/procurement-project-management.component';
import { LvInstallationComponent } from './pages/lv-installation/lv-installation.component';
import { TrainingsComponent } from './pages/trainings/trainings.component';
import { ControlledBoltingHydraulicEquipmentsComponent } from './pages/controlled-bolting-hydraulic-equipments/controlled-bolting-hydraulic-equipments.component';
import { HydrotestingChemicalInjectionSkidsComponent } from './pages/hydrotesting-chemical-injection-skids/hydrotesting-chemical-injection-skids.component';
import { OnSiteAtexMachiningComponent } from './pages/on-site-atex-machining/on-site-atex-machining.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:  'home', component: HomeComponent},
  { path:  'about-us', component: AboutUsComponent},
  { path:  'certifications', component: CertificationsComponent},
  { path:  'careers', component: CareersComponent},
  { path:  'contact', component: ContactUsComponent},
  { path:  'manufacturing', component: ManufacturingComponent},
  { path:  'fluid-transfer', component: FluidTransferSolutionComponent},
  { path:  'procurement-project-management', component: ProcurementProjectManagementComponent},
  { path:  'lv-installation', component: LvInstallationComponent},
  { path:  'trainings', component: TrainingsComponent},
  { path:  'controlled-bolting-hydraulic-equipments', component: ControlledBoltingHydraulicEquipmentsComponent},
  { path:  'hydrotesting-chemical-injection-skids', component: HydrotestingChemicalInjectionSkidsComponent},
  { path:  'on-site-atex-machining', component: OnSiteAtexMachiningComponent},

]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
