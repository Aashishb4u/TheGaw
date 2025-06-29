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
    LvInstallationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
