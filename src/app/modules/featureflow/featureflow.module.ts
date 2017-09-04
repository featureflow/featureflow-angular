import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureflowComponent } from './featureflow.component';
import { FeatureflowService } from './featureflow.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FeatureflowComponent],
  exports: [
    FeatureflowComponent
  ],
  providers: [FeatureflowService]
})
export class FeatureflowModule { }
