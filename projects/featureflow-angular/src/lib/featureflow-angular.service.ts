import {Injectable} from '@angular/core';
import * as Featureflow from 'featureflow-client';
import {UserTypeParam, ConfigTypeParam, EvaluatedFeaturesType, Evaluate, FeaturesType} from 'featureflow-client';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FeatureflowAngularService {
  private _featureflow: Featureflow;
  private _handleUpdated;
  private featureChangeSource = new Subject<FeaturesType>();
  public featureChanged$ = this.featureChangeSource.asObservable();
  private _features: FeaturesType;

  constructor() {
  }

  init(
    apiKey: string,
    user?: UserTypeParam,
    config?: ConfigTypeParam
  ) {
    this._featureflow = Featureflow.init(apiKey, user, config);
    this._handleUpdated = this.handleUpdated.bind(this);
    this._featureflow.on('INIT', this._handleUpdated);
    this._featureflow.on('UPDATED_FEATURE', this._handleUpdated);
    this._features = this._featureflow.getFeatures();
  }

  evaluate(feature: string): Evaluate {
    return this._featureflow.evaluate(feature);
  }

  getFeatures(): EvaluatedFeaturesType {
    return this._features;
  }

  goal(goal: string): void {
    return this._featureflow.goal(goal);
  }

  hasReceivedInitialResponse(): boolean {
    return this._featureflow.hasReceivedInitialResponse();
  }

  resetAnonymousId(): string {
    return this._featureflow.resetAnonymousId();
  }

  updateUser(user: UserTypeParam, callback: object) {
    this._featureflow.updateUser();
  }

  handleUpdated(features) {
    Object.assign(this._features, this._features, this._featureflow.evalAll(features));
    this.featureChangeSource.next(this._featureflow.evalAll(features));
  }

  client() {
    return this._featureflow;
  }
}
