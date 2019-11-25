import { TestBed } from '@angular/core/testing';

import { FeatureflowAngularService } from './featureflow-angular.service';

describe('FeatureflowAngularService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FeatureflowAngularService = TestBed.get(FeatureflowAngularService);
    expect(service).toBeTruthy();
  });
});
