import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainSlideshowComponent } from './main-slideshow/main-slideshow.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AlliesSlideshowComponent } from './allies-slideshow/allies-slideshow.component';
import { NodoBannerComponent } from './nodo-banner/nodo-banner.component';
import { FormComponent } from './form/form.component';
import { HomeComponent } from './home/home.component';
import { LabSpacesComponent } from './lab-spaces/lab-spaces.component';
import { ConoceMasComponent } from './conoce-mas/conoce-mas.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSlideshowComponent,
    AlliesSlideshowComponent,
    NodoBannerComponent,
    FormComponent,
    HomeComponent,
    LabSpacesComponent,
    ConoceMasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
