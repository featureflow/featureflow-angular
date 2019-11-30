import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {FeatureflowAngularService} from 'featureflow-angular';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnDestroy {
  title = 'featureflow-angular-example';
  features: any;
  featureflow: any;
  exampleFeatureValue;
  updateFeatures: Subscription = null;

  constructor(
    private featureflowService: FeatureflowAngularService,
    private ref: ChangeDetectorRef
  ) {
    featureflowService.init('js-env-bbb659960a3344c5a31681282c0c4bdf', {id: '1'}, null);
    this.features = featureflowService.getFeatures();

    this.featureflow = featureflowService.client();
    this.exampleFeatureValue = featureflowService.evaluate('example-feature').value();
    this.updateFeatures = featureflowService.featureChanged$.subscribe(features => {
      this.features = featureflowService.getFeatures();
      this.ref.detectChanges();
    });
  }

  ngOnDestroy() {
    this.updateFeatures.unsubscribe();
  }
}
