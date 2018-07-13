import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdmissionDetailsComponent } from './admission-details/admission-details.component';

@NgModule({
  declarations: [
    AppComponent,
    AdmissionDetailsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
