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
import { TopLoadingArmsComponent } from './pages/products/top-loading-arms/top-loading-arms.component';
import { BottomLoadingArmsComponent } from './pages/products/bottom-loading-arms/bottom-loading-arms.component';
import { MarineLoadingArmsComponent } from './pages/products/marine-loading-arms/marine-loading-arms.component';
import { FloatingSuctionUnitComponent } from './pages/products/floating-suction-unit/floating-suction-unit.component';
import { PositiveDisplacementFlowMeterComponent } from './pages/products/positive-displacement-flow-meter/positive-displacement-flow-meter.component';
import { GravityUnloadingFlowMeterComponent } from './pages/products/gravity-unloading-flow-meter/gravity-unloading-flow-meter.component';
import { SquareDriveTorqueWrenchComponent } from './pages/products/square-drive-torque-wrench/square-drive-torque-wrench.component';
import { LowProfileTorqueWrenchComponent } from './pages/products/low-profile-torque-wrench/low-profile-torque-wrench.component';
import { PneumaticTorqueWrenchComponent } from './pages/products/pneumatic-torque-wrench/pneumatic-torque-wrench.component';
import { TorquePumpComponent } from './pages/products/torque-pump/torque-pump.component';
import { SpringReturnBoltTensionerComponent } from './pages/products/spring-return-bolt-tensioner/spring-return-bolt-tensioner.component';
import { MultiStageBoltTensionerComponent } from './pages/products/multi-stage-bolt-tensioner/multi-stage-bolt-tensioner.component';
import { SubseaBoltTensionerComponent } from './pages/products/subsea-bolt-tensioner/subsea-bolt-tensioner.component';
import { TensioningPumpComponent } from './pages/products/tensioning-pump/tensioning-pump.component';
import { NutSplitterComponent } from './pages/products/nut-splitter/nut-splitter.component';
import { FlangeSpreaderComponent } from './pages/products/flange-spreader/flange-spreader.component';
import { HydraulicPullersComponent } from './pages/products/hydraulic-pullers/hydraulic-pullers.component';
import { ImpactSocketsComponent } from './pages/products/impact-sockets/impact-sockets.component';
import { HydrotestingUnitComponent } from './pages/products/hydrotesting-unit/hydrotesting-unit.component';
import { ChemicalInjectionSkidsComponent } from './pages/products/chemical-injection-skids/chemical-injection-skids.component';
import { TestManifoldsComponent } from './pages/products/test-manifolds/test-manifolds.component';
import { SplitFrameColdCuttingMachineComponent } from './pages/products/split-frame-cold-cutting-machine/split-frame-cold-cutting-machine.component';
import { IdMountedFlangeFacingMachineComponent } from './pages/products/id-mounted-flange-facing-machine/id-mounted-flange-facing-machine.component';
import { ManuelFlangeFacingMachineComponent } from './pages/products/manuel-flange-facing-machine/manuel-flange-facing-machine.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'careers', component: CareersComponent },
  { path: 'contact', component: ContactUsComponent },
  { path: 'manufacturing', component: ManufacturingComponent },
  { path: 'fluid-transfer', component: FluidTransferSolutionComponent },
  { path: 'procurement-project-management', component: ProcurementProjectManagementComponent },
  { path: 'lv-installation', component: LvInstallationComponent },
  { path: 'trainings', component: TrainingsComponent },
  { path: 'controlled-bolting-hydraulic-equipments', component: ControlledBoltingHydraulicEquipmentsComponent },
  { path: 'hydrotesting-chemical-injection-skids', component: HydrotestingChemicalInjectionSkidsComponent },
  { path: 'on-site-atex-machining', component: OnSiteAtexMachiningComponent },
  { path: 'top-loading-arms', component: TopLoadingArmsComponent },
  { path: 'bottom-loading-arms', component: BottomLoadingArmsComponent },
  { path: 'marine-loading-arms', component: MarineLoadingArmsComponent },
  { path: 'floating-suction-unit', component: FloatingSuctionUnitComponent },
  { path: 'positive-displacement-flow-meter', component: PositiveDisplacementFlowMeterComponent },
  { path: 'gravity-unloading-flow-meter', component: GravityUnloadingFlowMeterComponent },
  { path: 'square-drive-torque-wrench', component: SquareDriveTorqueWrenchComponent },
  { path: 'low-profile-torque-wrench', component: LowProfileTorqueWrenchComponent },
  { path: 'pneumatic-torque-wrench', component: PneumaticTorqueWrenchComponent },
  { path: 'torque-pump', component: TorquePumpComponent },
  { path: 'spring-return-bolt-tensioner', component: SpringReturnBoltTensionerComponent },
  { path: 'multi-stage-bolt-tensioner', component: MultiStageBoltTensionerComponent },
  { path: 'subsea-bolt-tensioner', component: SubseaBoltTensionerComponent },
  { path: 'tensioning-pump', component: TensioningPumpComponent },
  { path: 'nut-splitter', component: NutSplitterComponent },
  { path: 'flange-spreader', component: FlangeSpreaderComponent },
  { path: 'hydraulic-pullers', component: HydraulicPullersComponent },
  { path: 'impact-sockets', component: ImpactSocketsComponent },
  { path: 'hydrotesting-unit', component: HydrotestingUnitComponent },
  { path: 'chemical-injection-skids', component: ChemicalInjectionSkidsComponent },
  { path: 'test-manifolds', component: TestManifoldsComponent },
  { path: 'split-frame-cold-cutting-machine', component: SplitFrameColdCuttingMachineComponent },
  { path: 'id-mounted-flange-facing-machine', component: IdMountedFlangeFacingMachineComponent },
  { path: 'manuel-flange-facing-machine', component: ManuelFlangeFacingMachineComponent },


]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
