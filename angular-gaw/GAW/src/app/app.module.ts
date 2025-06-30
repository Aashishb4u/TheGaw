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
    ProductDetailsComponent
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
