import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
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
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { HttpClientModule } from '@angular/common/http';
import { TopLoadingArmsComponent } from './pages/products/top-loading-arms/top-loading-arms.component';
import { BottomLoadingArmsComponent } from './pages/products/bottom-loading-arms/bottom-loading-arms.component';
import { HeaderWhiteComponent } from './components/header-white/header-white.component';
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

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutUsComponent,
    HeaderComponent,
    FooterComponent,
    CertificationsComponent,
    CareersComponent,
    ContactUsComponent,
    ManufacturingComponent,
    FluidTransferSolutionComponent,
    ProcurementProjectManagementComponent,
    LvInstallationComponent,
    TrainingsComponent,
    ControlledBoltingHydraulicEquipmentsComponent,
    HydrotestingChemicalInjectionSkidsComponent,
    OnSiteAtexMachiningComponent,
    ProductDetailsComponent,
    TopLoadingArmsComponent,
    BottomLoadingArmsComponent,
    HeaderWhiteComponent,
    MarineLoadingArmsComponent,
    FloatingSuctionUnitComponent,
    PositiveDisplacementFlowMeterComponent,
    GravityUnloadingFlowMeterComponent,
    SquareDriveTorqueWrenchComponent,
    LowProfileTorqueWrenchComponent,
    PneumaticTorqueWrenchComponent,
    TorquePumpComponent,
    SpringReturnBoltTensionerComponent,
    MultiStageBoltTensionerComponent,
    SubseaBoltTensionerComponent,
    TensioningPumpComponent,
    NutSplitterComponent,
    FlangeSpreaderComponent,
    HydraulicPullersComponent,
    ImpactSocketsComponent,
    HydrotestingUnitComponent,
    ChemicalInjectionSkidsComponent,
    TestManifoldsComponent,
    SplitFrameColdCuttingMachineComponent,
    IdMountedFlangeFacingMachineComponent,
    ManuelFlangeFacingMachineComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
