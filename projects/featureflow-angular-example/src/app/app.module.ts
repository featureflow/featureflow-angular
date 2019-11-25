import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FeatureflowAngularModule } from 'featureflow-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureflowAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
