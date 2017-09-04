import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureflowComponent } from './featureflow.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureflowComponent],
  exports: [
    FeatureflowComponent
  ]
})
export class FeatureflowModule { }
