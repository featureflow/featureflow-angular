import {Inject, Injectable, Optional} from '@angular/core';
import * as Featureflow from 'featureflow-client';
import { UserTypeParam } from 'featureflow-client';
import { ConfigTypeParam, EvaluatedFeaturesType, Evaluate } from 'featureflow-client';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class FeatureflowAngularService {
  private _featureflow: Featureflow;
  private _handleUpdated;
  private featureChangeSource = new Subject<void>();
  public featureChanged$ = this.featureChangeSource.asObservable();

  constructor() {}
  init(
    apiKey: string,
    user?: UserTypeParam,
    config?: ConfigTypeParam
  ){
    this._featureflow = Featureflow.init(apiKey, user, config)
    this._handleUpdated = this.handleUpdated.bind(this);
    this._featureflow.on('INIT', this._handleUpdated);
    this._featureflow.on('UPDATED_FEATURE', this._handleUpdated);

  }

  evaluate(key: string): Evaluate {
    return this._featureflow.evaluate(key);
  }

  getFeatures(): EvaluatedFeaturesType {
    return this._featureflow.getFeatures();
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

  handleUpdated(){
    this.featureChangeSource.next();
  }

  client(){
    return this._featureflow;
  }





}
