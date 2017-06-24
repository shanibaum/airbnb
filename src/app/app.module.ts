import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CitiesComponent } from './Components/cities/cities.component';

import { CitiesService } from './Services/cities.service';
import { FormsModule } from '@angular/forms';
import { CityListsService } from './Services/city-lists.service';
import { ModalModule } from 'angular2-modal';
import { BootstrapModalModule } from 'angular2-modal/plugins/bootstrap';
import { NgProgressModule } from 'ng2-progressbar';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpModule,
      ModalModule.forRoot(),
      BootstrapModalModule,
      NgProgressModule,
  ],
  providers: [CitiesService,CityListsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
