import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FeatureflowModule } from './modules/featureflow/featureflow.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FeatureflowModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
