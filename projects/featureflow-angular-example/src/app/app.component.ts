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
    //Use your 'JS Client Environment SDK Key:'
    featureflowService.init('js-env-bbb659960a3344c5a31681282c0c4bdf', {id: 'myUniqueId1'}, null);

    //Initialising without an id will create an anonymous unique user id stored in localStorage
    //featureflowService.init('js-env-YOUR-KEY-HERE');

    //Initialising with attributes will allow targeting
    /*featureflowService.init('js-env-YOUR-KEY-HERE',
      {
        id: 'myUniqueId1',
        attributes: {
          name: 'Bob Hope',
          age: 50,
          signup_date: '2019-01-01T00:00:00.000Z'
        }
      });*/

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
