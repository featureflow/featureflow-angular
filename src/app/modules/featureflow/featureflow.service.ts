import {Inject, Injectable, Optional} from '@angular/core';
import { Featureflow } from 'featureflow-client';
import { Evaluate } from 'featureflow-client';


@Injectable()
export class FeatureflowService {
  constructor() {}

  init(apiKey?: string, user?: Object, config?: Object) : Featureflow{
    return Featureflow.init(apiKey, user, config); //in constructor?
  }
}
