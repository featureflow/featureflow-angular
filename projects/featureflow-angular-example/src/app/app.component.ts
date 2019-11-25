import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import { FeatureflowAngularService } from 'featureflow-angular';
import {Observable, Subscription} from "rxjs";


class FeatureMap {
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [FeatureflowAngularService],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  title = 'featureflow-angular-example';
  features$: Observable<FeatureMap>;
  features: any;
  featureflow: any;
  exampleFeatureValue;
  updateFeatures: Subscription = null;
  constructor(

    private featureflowService: FeatureflowAngularService,
    private cd: ChangeDetectorRef
  ){
    featureflowService.init("js-env-bbb659960a3344c5a31681282c0c4bdf", {id:'1'}, null);
    this.features = featureflowService.getFeatures();

    this.featureflow = featureflowService.client();
    this.exampleFeatureValue = featureflowService.evaluate("example-feature").value();
    this.updateFeatures = this.featureflowService.featureChanged$.subscribe(features =>
    {
      this.exampleFeatureValue = "" + featureflowService.evaluate("example-feature").value();
      console.log("Features updated, example-feature is: " + this.exampleFeatureValue);
    });
  }
  ngOnDestroy() {
    this.updateFeatures.unsubscribe();
  }
}
