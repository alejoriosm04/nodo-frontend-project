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

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainSlideshowComponent,
    AlliesSlideshowComponent,
    NodoBannerComponent,
    FormComponent
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
