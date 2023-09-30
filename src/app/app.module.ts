import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

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
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    ConoceMasComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
